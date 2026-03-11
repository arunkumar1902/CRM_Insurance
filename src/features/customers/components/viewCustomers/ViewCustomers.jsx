import React, { useEffect, useState } from 'react'
import '../viewCustomers/ViewCustomers.css'
import axios from 'axios';

export default function ViewCustomers() {

  const [customerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/user_details/");
      setCustomerDetails(response.data);
    }
    catch (error) {
      console.log(`Error : ${error}`);
      alert("Error Occured to fetch customer details");
    }
  }

  const handleViewCustomer = ()=>{

  }

  return (
    <>
      <div className='upcoming_policy_renewals'>
        <h2>Customer Details :</h2>
        <br />

        <section className='renewal_table'>
          {customerDetails.length > 0
            ?
            <table>

              <thead>
                <tr>
                  <th>S.No </th>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Contact</th>
                  <th>Status </th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                {customerDetails.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.customer_id}</td>
                      <td>{data.personal_details.customer_name}</td>
                      <td>{data.personal_details.phone}</td>
                      <td>{data.status}</td>
                      <td><button onClick={()=>handleViewCustomer(data.customer_id)}>View</button></td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
            :
            <div>No Customers</div>
          }
        </section>

      </div>
    </>
  )
}

