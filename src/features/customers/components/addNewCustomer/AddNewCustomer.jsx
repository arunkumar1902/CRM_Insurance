import React, { useState } from 'react';
import '../addNewCustomer/AddNewCustomer.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomerForm from '../forms/CustomerForm';

export default function AddNewCustomer() {
  const [newCustomer, setNewCustomer] = useState({
    personal_details: {
      customer_name: "",
      gender: "",
      date_of_birth: "",
      email: "",
      phone: ""
    },
    address: {
      street: "",
      city: "",
      state: "",
      pincode: ""
    }
  });

  const [formErrors, setFormErrors] = useState([]);

  const [customerAdded, setCustomerAdded] = useState(false);

  const navigate = useNavigate();

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/user_details/');
      return response.data;
    } catch (error) {
      console.log("Error : ", error);
      alert("error fetching customers detail");
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [section, field] = name.split('.');

    setNewCustomer((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const customerDetails = await fetchCustomerDetails();

      const userAlreadyExist = customerDetails?.find(data => 
        data.personal_details.email === newCustomer.personal_details.email ||
        data.personal_details.phone === newCustomer.personal_details.phone
      );

      if (userAlreadyExist) {
        alert("Customer Already Exist");
      }
      else{
        await axios.post('http://127.0.0.1:8080/user_details/', newCustomer);
        console.log("customer added successfully");        
        setCustomerAdded(true);
      }
    } catch (error) {
      console.log("Error : ", error);
      alert("Error in adding new customer, Pls try again");

      
    }
  }
  
  const handlePolicyFormNavigate = ()=>{
    navigate('/customer-details/addPolicy');
  }

  return (
    <>

     <CustomerForm
        newCustomer = {newCustomer}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
     ></CustomerForm>

     {customerAdded && 
     <div className='modal-overlay'>
      <div className='customer-added-dialogue-box'>
        <p>Customer Details are added successfully, now enter the Policy details</p>
        <button onClick={handlePolicyFormNavigate}>Ok</button>
      </div>
     </div>
     }
    </>

  )
}
