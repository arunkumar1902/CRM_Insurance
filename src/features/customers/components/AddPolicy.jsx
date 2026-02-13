import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../components/AddPolicy.css'

export default function AddPolicy() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showPolicyForm, setShowPolicyForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    customerID : '',
    customerName : ''
  });
  const [policyData, setPolicyData] = useState({
    policyID:'',
    policyType:'',
    policyNumber:'',
    provider:'',
    premiumAmount:'',
    premiumFrequency:'',
    sumAssured:'',
    paymentMode:'',
    startDate:'',
    endDate:'',
    renewalDate:'',
    status:'',
    nomineeName:'',
    nomineeRelationship:'',
    nomineePhoneNumber:'',
    customerNotes:''
  })

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/customers");
      setCustomers(response.data);
    } catch (error) {
      alert("Error in fetching customer accounts", error);
    }
  }

  const handleCustomerDetailsChange = (event)=>{
    const {name, value} = event.target;

    const updatedDetails = {
      ...customerDetails,
      [name]: value
    }
    setCustomerDetails(updatedDetails);
  }

  const handleCustomerDetailsForm = (e)=>{
    e.preventDefault();
    const existingCustomer = customers.find((data)=> 
      data.customerID === customerDetails.customerID &&
      data.personalDetails.customerName === customerDetails.customerName 
    );
    if(existingCustomer){
      setSelectedCustomer(existingCustomer);
      setShowPolicyForm(true);
    }
    else{
      alert("Customer Details not found, try again");
      setSelectedCustomer(null);
    }
    
  };

  const handleClear = (e)=>{
    e.preventDefault();
    setCustomerDetails({
      customerID:"",
      customerName:""
    })
  }

  return (
    <div className='addPolicy'>
      <form onSubmit={handleCustomerDetailsForm}>
        <h3>Customer Details</h3>
        <fieldset>
          <label htmlFor="customerID">Enter Customer ID: </label>
          <input type="text" id='customerID' name='customerID' placeholder='Enter Customer ID' value={customerDetails.customerID} onChange={handleCustomerDetailsChange} required/>
        </fieldset>

        <fieldset>
          <label htmlFor="customerName">Enter Customer Name: </label>
          <input type="text" id='customerName' name='customerName' placeholder='Enter Customer Name' value={customerDetails.customerName} onChange={handleCustomerDetailsChange} required/>
        </fieldset>

        <button type='Submit'>Enter</button>
        <button onClick={handleClear}>Clear</button>
      </form>

      {showPolicyForm && selectedCustomer && 
        <div className='newPolicyForm'>

          <article>
            <p>Customer ID : {selectedCustomer.customerID}</p>
            <p>Customer Name : {selectedCustomer.personalDetails.customerName}</p>
          </article>

          <form>
            <fieldset>
              <label htmlFor="policyID">Policy ID</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="policyType">Policy Type</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="policyNumber">Policy Number</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="provider">Provider</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="premiumAmount">Premium Amount</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="premiumFrequency">Premium Frequency</label>
              <select name="premiumFrequency" id="premiumFrequency">
                <option value="">--- Select Frequency ---</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Half-Yearly">Half-Yearly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="sumAssured">Sum Assured</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="paymentMode">Payment Mode</label>
              <select name="paymentMode" id="paymentMode">
                <option value="">--- Select Payment Mode ---</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="DebitCard">Debit Card</option>
                <option value="CreditCard">Credit Card</option>
                <option value="Cheque">Cheque</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="startDate">Start Date</label>
              <input type="date" />
            </fieldset>

            <fieldset>
              <label htmlFor="endDate">End Date</label>
              <input type="date" />
            </fieldset>

            <fieldset>
              <label htmlFor="renewalDate">Renewal Date</label>
              <input type="date" />
            </fieldset>

            <fieldset>
              <label htmlFor="status">Status</label>
              <select name="status" id="status">
                <option value="">--- Select Status ---</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Lapsed">Lapsed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </fieldset>

            <h3>-------------------- Nominee Details --------------------</h3>

            <fieldset>
              <label htmlFor="nomineeName">Nominee Name</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="nomineeRelationship">Nominee Relationship</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="nomineePhone">Nominee Phone Number</label>
              <input type="text" />
            </fieldset>

            <fieldset>
              <label htmlFor="customerNotes">Customer Notes</label>
              <input type="text" />
            </fieldset>

            <button type='submit'>Submit</button>
            <button>Cancel</button>

          </form>
        </div>
      }

    </div>
  )
}
