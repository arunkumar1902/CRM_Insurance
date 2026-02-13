import React, { useEffect, useState } from 'react'
import '../upcomingRenewals/UpcomingRenewals.css'
import axios from 'axios';
import { calculateUpcomingRenewals } from '../../utils/upcomingRenewals';

export default function UpcomingRenewals() {
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

    const upcomingRenewalsThisMonth = calculateUpcomingRenewals(customerDetails);

    return (
        <>
            <div className='upcoming_policy_renewals'>
                <h2>Upcoming Policy Renewals</h2>
                <br />

                <section className='renewal_table'>
                    {upcomingRenewalsThisMonth.length > 0
                        ?
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No </th>
                                    <th>Customer </th>
                                    <th>Policy Type </th>
                                    <th>Policy Number </th>
                                    <th>End Date </th>
                                    <th>Days Left </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {upcomingRenewalsThisMonth.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.customerName}</td>
                                            <td>{data.policyType}</td>
                                            <td>{data.policyNumber}</td>
                                            <td>{data.endDate}</td>
                                            <td>{data.daysLeft}</td>
                                            <td><button>Notify</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        :
                        <div>No Upcoming renewals for this month</div>
                    }
                </section>

            </div>
        </>
    )
}
