import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UpdateCustomer() {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [policyDetails, setPolicyDetails] = useState([]);

  const fetchCustomerDetails = async()=>{
    try {
      const response = await axios.get("http://127.0.0.1:8080/user_details/");
      setCustomerDetails(response.data);
    } catch (error) {
      console.log("Error in Fetching customer details: ", error);
    }
  }

  const fetchPolicyDetails = async()=>{
    try {
      const response = await axios.get("http://127.0.0.1:8080/policy_details")
      setPolicyDetails(response.data);
    } catch (error) {
      console.log("Error in Fetching policy details: ", error);
    }
  }

  return (
    <div>UpdateCustomer</div>
  )
}
