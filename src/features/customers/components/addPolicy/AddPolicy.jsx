import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../addPolicy/AddPolicy.css'
import PolicyForm from '../forms/PolicyForm';
import CustomerEmailForm from '../forms/CustomerEmailForm';
import { useNavigate } from 'react-router-dom';

export default function AddPolicy() {
  const [customers, setCustomers] = useState([]); // for storing all customer details
  const [selectedCustomer, setSelectedCustomer] = useState(null); // for storing only the selected customer
  const [showPolicyForm, setShowPolicyForm] = useState(false); // to display policy form
  const [customerEmail, setCustomerEmail] = useState(""); // store customer email
  const [formErrors, setFormErrors] = useState({});
  const [policyData, setPolicyData] = useState({
    policy_type:'',
    provider:'',
    premium_amount:'',
    premium_frequency:'',
    sum_assured:'',
    payment_mode:'',
    start_date:'',
    end_date:'',
    renewal_date:'',
    status:'',
    nominee_name:'',
    nominee_relationship:'',
    nominee_phone:'',
    customer_notes:''
  })
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/user_details/");
      setCustomers(response.data);
    } catch (error) {
      alert("Error in fetching customer accounts", error);
    }
  }

  const handleCustomerDetailsForm = (e)=>{
    e.preventDefault();
    const existingCustomer = customers.find((data)=> 
      data.personal_details.email.toLowerCase().trim() === customerEmail.toLowerCase().trim()
    );
    if(existingCustomer){
      const selectedCustomerDetails = {
        customer_id : existingCustomer.customer_id,
        customer_name: existingCustomer.personal_details.customer_name,
        email: existingCustomer.personal_details.email
      }
      setSelectedCustomer(selectedCustomerDetails);
      setShowPolicyForm(true);
    }
    else{
      alert("Customer Details not found, try again");
      console.log("Customer Details not found, try again");
    }
    
  };

  const handleClear = ()=>{
    setCustomerEmail("");
  }

  const handlePolicyData = (event)=>{
    const {name, value} = event.target;
    const newPolicyData = {
      ...policyData,
      [name]:value
    }
    setPolicyData(newPolicyData);
  }

  const handlePolicyDataSubmit = async(event)=>{
    event.preventDefault();
    const payload = {
      ...selectedCustomer,
      ...policyData
    }
    try {
      await axios.post("http://127.0.0.1:8080/policy_details/", payload);
      alert("Policy Submitted Successfully");
      navigate("/");
    } catch (error) {
      console.log("Error in submitting new policy", error);
      if(error.response?.data?.detail){
        const backendError = error.response.data.detail;

        let errorObj = {};
        backendError.forEach((err)=>{
          let Field = err.loc[1];
          errorObj[Field] = err.msg.split(",").pop();
        });
        setFormErrors(errorObj);
      }
    }
  }

  return (
    <div className='addPolicy'>

      {!showPolicyForm &&
        <CustomerEmailForm
          customerEmail = {customerEmail}
          setCustomerEmail = {setCustomerEmail}
          handleCustomerDetailsForm = {handleCustomerDetailsForm}
          handleClear = {handleClear}
          ></CustomerEmailForm>
        }

      {showPolicyForm && selectedCustomer && 
        <div className='newPolicyForm'>

          <article>
            <p>Customer ID : {selectedCustomer.customer_id}</p>
            <p>Customer Email : {selectedCustomer.email}</p>
            <p>Customer Name : {selectedCustomer.customer_name}</p>
          </article>

          <PolicyForm
            policyData={policyData}
            setShowPolicyForm = {setShowPolicyForm}
            handlePolicyData = {handlePolicyData}
            handlePolicyDataSubmit = {handlePolicyDataSubmit}
            formErrors={formErrors}
          ></PolicyForm>
        </div>
      }

    </div>
  )
}
