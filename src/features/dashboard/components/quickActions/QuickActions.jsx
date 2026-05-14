import React from 'react'
import '../quickActions/QuickActions.css'
import { useNavigate } from 'react-router-dom'

export default function QuickActions() {

    const navigate = useNavigate();
    const handleQuickAction = (action)=>{
        navigate(`/customer-details/${action}`);
    }
    return (
        <>
            <h3>Quick Actions</h3>
            <br />

            <div className='quick-actions'>
                <button onClick={()=>handleQuickAction("addNewCustomer")}>+ Add New Customer</button>
                <button onClick={()=>handleQuickAction("addPolicy")}>+ Add New Policy</button>
                {/* <button onClick={()=>handleQuickAction("UpdateCustomer")}>+ Update Customer</button> */}
                <button onClick={()=>handleQuickAction("viewCustomers")}>View Customers</button>
            </div>
        </>
    )
}
