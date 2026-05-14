import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import "../individual_customer/IndividualCustomer.css"

export default function IndividualCustomer() {

    const { id } = useParams();
    const [customerData, setCustomerData] = useState(null);
    const [policyData, setPolicyData] = useState(null);

    useEffect(() => {
        fetchCustomerDetails();
        fetchPolicyDetails();
    }, []);

    const fetchCustomerDetails = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8080/user_details/${id}`);
            setCustomerData(response.data);
        } catch (error) {
            console.log("Error in fetching custoer data: ", error);
        }
    }

    const fetchPolicyDetails = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8080/policy_details/${id}`);
            setPolicyData(response.data);
        } catch (error) {
            console.log("Error in fetching custoer data: ", error);
        }
    }

    return (
        <>

            <div className='customerDetails-header'>
                <Link to='/' className='homeLink'>Home</Link>
            </div>

            <section className="section">
                <div className="details_div">
                    {customerData ?
                        <table className="details_table">

                            <tbody>
                                <tr className="section_header">
                                    <th colSpan="2">Customer Details</th>
                                </tr>

                                <tr>
                                    <th>Customer ID</th>
                                    <td>{customerData.customer_id}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{customerData.status}</td>
                                </tr>
                                <tr>
                                    <th>Account Created On</th>
                                    <td>{customerData.account_created_on}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{customerData.personal_details.customer_name}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{customerData.personal_details.gender}</td>
                                </tr>
                                <tr>
                                    <th>Date of Birth</th>
                                    <td>{customerData.personal_details.date_of_birth}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{customerData.personal_details.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{customerData.personal_details.phone}</td>
                                </tr>
                                <tr>
                                    <th>Street</th>
                                    <td>{customerData.address.street}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{customerData.address.city}</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>{customerData.address.state}</td>
                                </tr>
                                <tr>
                                    <th>Pincode</th>
                                    <td>{customerData.address.pincode}</td>
                                </tr>
                            </tbody>
                        </table>
                        : <div>Something Wrong, try again</div>}
                </div>
            </section>

            <section className="section">
                <h2>Policy Details</h2>
                <div className="details_div">
                    {policyData && policyData.length > 0 ? (
                        policyData.map((policy, index) => (
                            <table className="details_table" key={index} style={{ marginBottom: "30px" }}>
                                <tbody>
                                    <tr className="section_header">
                                        <th colSpan="2">Policy #{index + 1}</th>
                                    </tr>

                                    <tr>
                                        <th>Policy Number</th>
                                        <td>{policy.policy_number}</td>
                                    </tr>
                                    <tr>
                                        <th>Policy Type</th>
                                        <td>{policy.policy_type}</td>
                                    </tr>
                                    <tr>
                                        <th>Provider</th>
                                        <td>{policy.provider}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>{policy.status}</td>
                                    </tr>

                                    <tr>
                                        <th>Premium Amount</th>
                                        <td>₹{policy.premium_amount}</td>
                                    </tr>
                                    <tr>
                                        <th>Premium Frequency</th>
                                        <td>{policy.premium_frequency}</td>
                                    </tr>
                                    <tr>
                                        <th>Sum Assured</th>
                                        <td>₹{policy.sum_assured}</td>
                                    </tr>
                                    <tr>
                                        <th>Payment Mode</th>
                                        <td>{policy.payment_mode}</td>
                                    </tr>

                                    <tr>
                                        <th>Start Date</th>
                                        <td>{policy.start_date}</td>
                                    </tr>
                                    <tr>
                                        <th>End Date</th>
                                        <td>{policy.end_date}</td>
                                    </tr>
                                    <tr>
                                        <th>Renewal Date</th>
                                        <td>{policy.renewal_date}</td>
                                    </tr>

                                    <tr>
                                        <th>Nominee Name</th>
                                        <td>{policy.nominee_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Relationship</th>
                                        <td>{policy.nominee_relationship}</td>
                                    </tr>
                                    <tr>
                                        <th>Nominee Phone</th>
                                        <td>{policy.nominee_phone}</td>
                                    </tr>

                                    <tr>
                                        <th>Customer Notes</th>
                                        <td>{policy.customer_notes}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))
                    ) : (
                        <div>No policies found</div>
                    )}
                </div>
            </section>
        </>
    )
}