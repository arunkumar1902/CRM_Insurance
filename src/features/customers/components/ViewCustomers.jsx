import React, { useEffect, useState } from 'react'
import '../../dashboard/components/upcomingRenewals/UpcomingRenewals.css'
import axios from 'axios';

export default function ViewCustomers() {

  const [customerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3000/customers");
      setCustomerDetails(response.data);
    }
    catch (error) {
      console.log(`Error : ${error}`);
      alert("Error Occured to fetch customer details");
    }
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
                  <th>Policy Type </th>
                  <th>Policy Number </th>
                  <th>End Date </th>
                  <th>Policy Status </th>
                </tr>
              </thead>

              <tbody>
                {customerDetails.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.customerID}</td>
                      <td>{data.personalDetails.customerName}</td>
                      <td>{data.personalDetails.phone}</td>
                      <td>{data.policyType}</td>
                      <td>{data.policyNumber}</td>
                      <td>{data.endDate}</td>
                      <td>{data.daysLeft}</td>
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

