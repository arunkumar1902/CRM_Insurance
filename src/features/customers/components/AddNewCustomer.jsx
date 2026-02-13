import React, { useEffect, useState } from 'react';
import '../components/AddNewCustomer.css'
import axios from 'axios';

export default function AddNewCustomer() {
  const [newCustomer, setNewCustomer] = useState({
    personalDetails: {
      customerName: "",
      gender: "",
      dateOfBirth: "",
      email: "",
      phone: ""
    },
    address: {
      street: "",
      city: "",
      state: "",
      pincode: ""
    },
    policies: []
  });

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3000/customers');
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
    console.log(newCustomer);

    try {
      const customerDetails = await fetchCustomerDetails();
      const userAlreadyExist = customerDetails.find(data => 
        data.personalDetails.email === newCustomer.personalDetails.email &&
        data.personalDetails.phone === newCustomer.personalDetails.phone
      );
      
      if (userAlreadyExist) {
        alert("Customer Already Exist");
      }
      else{
        const customerID = `CUST-${Date.now()}-${Math.floor(Math.random()*1000)}`
        const payload = {
          ...newCustomer,
          customerID,
          accountCreatedOn : new Date().toISOString().split('T')[0]
        }
        await axios.post('http://localhost:3000/customers', payload);
        alert("Account Created Successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Error in adding new customer");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='customerDetails'>
        <div>
          <h3>Personal Details : </h3>

          <fieldset>
            <label htmlFor="customerName">Name</label>
            <input
              type="text"
              id='customerName'
              name='personalDetails.customerName'
              placeholder='Enter Customer Name'
              value={newCustomer.personalDetails.customerName}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset>
            <legend>Gender</legend>

            <label>
              <input
                type="radio"
                name='personalDetails.gender'
                value='male'
                checked={newCustomer.personalDetails.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name='personalDetails.gender'
                value='female'
                checked={newCustomer.personalDetails.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              name="personalDetails.dateOfBirth"
              id="dateOfBirth"
              value={newCustomer.personalDetails.dateOfBirth}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type='email'
              name="personalDetails.email"
              id="email"
              placeholder='Enter Customer Email'
              value={newCustomer.personalDetails.email}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="phone">Phone</label>
            <input
              type='text'
              name="personalDetails.phone"
              id="phone"
              placeholder='Enter Customer Phone'
              value={newCustomer.personalDetails.phone}
              onChange={handleChange}
              required
            />
          </fieldset>
        </div>

        <div>
          <h3>Address</h3>

          <fieldset>
            <label htmlFor="street">Street</label>
            <input
              type='text'
              name="address.street"
              id="street"
              placeholder='Enter Street'
              value={newCustomer.address.street}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="city">City</label>
            <input
              type='text'
              name="address.city"
              id="city"
              placeholder='Enter City'
              value={newCustomer.address.city}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="state">State</label>
            <input
              type='text'
              name="address.state"
              id="state"
              placeholder='Enter State'
              value={newCustomer.address.state}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="pincode">Pincode</label>
            <input
              type='text'
              name="address.pincode"
              id="pincode"
              placeholder='Enter Pincode'
              value={newCustomer.address.pincode}
              onChange={handleChange}
              required
            />
          </fieldset>

        </div>

        <button type="submit">Submit</button>
      </form>
    </>

  )
}
