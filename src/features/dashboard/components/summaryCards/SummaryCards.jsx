import { useEffect, useState } from 'react'
import '../summaryCards/SummaryCards.css'
import axios from 'axios';
import { calculateActivePolicyCount, calculatePendingRemindersCount, calculateRenewalsThisMonth } from '../../utils/summaryCards';


export default function SummaryCards() {
    const [customersDetail, setCustomersDetail] = useState([]);
    const [policyDetail, setPolicyDetail] = useState([]);
    
    useEffect(()=>{
        fetchCustomersDetail();
        fetchPolicyDetail();
    },[]);

    const fetchCustomersDetail = async()=>{
        try {
            const response = await axios.get("http://127.0.0.1:8080/user_details/");
            setCustomersDetail(response.data);
        } catch (error) {
            console.log(error);           
            alert("Error Occured to fetch customer details");
        }
    }

        const fetchPolicyDetail = async()=>{
        try {
            const response = await axios.get("http://127.0.0.1:8080/policy_details/");
            setPolicyDetail(response.data);
        } catch (error) {
            console.log(error); 
            alert("Error Occured to fetch policy details");
        }
    }

    const activePolicyCount = calculateActivePolicyCount(policyDetail)
    const renewalsThisMonthCount = calculateRenewalsThisMonth(policyDetail)
    const pendingRemindersCount = calculatePendingRemindersCount(policyDetail)   

    return (
        <>
            <section className='summary_cards'>

                <article className='individual_cards'>
                    <aside className='card_context'>
                        <h4>Total Customers</h4><br />
                        <p>{customersDetail.length}</p>
                    </aside>
                    <aside className='logo'>
                        <img src="https://cdn-icons-png.flaticon.com/128/17634/17634738.png" alt="logo" />
                    </aside>
                </article>

                <article className='individual_cards'>
                    <aside className='card_context'>
                        <h4>Active Policies</h4><br />
                        <p>{activePolicyCount}</p>
                    </aside>
                    <aside className='logo'>
                        <img src="https://cdn-icons-png.flaticon.com/128/9427/9427961.png" alt="logo" />
                    </aside>
                </article>

                <article className='individual_cards'>
                    <aside className='card_context'>
                        <h4>Policies Reviewing This Month</h4>
                        <p>{renewalsThisMonthCount}</p>
                    </aside>
                    <aside className='logo'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2370/2370264.png" alt="logo" />
                    </aside>
                </article>

                <article className='individual_cards'>
                    <aside className='card_context'>
                        <h4>Pending Reminders</h4><br />
                        <p>{pendingRemindersCount}</p>
                    </aside>
                    <aside className='logo'>
                        <img src="https://cdn-icons-png.flaticon.com/128/7016/7016958.png" alt="logo" />
                    </aside>
                </article>

            </section>
        </>
    )
}
