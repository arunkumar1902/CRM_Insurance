import React from 'react'
import '../quickActions/QuickActions.css'
import { useNavigate } from 'react-router-dom'

export default function QuickActions() {

    const navigate = useNavigate();
    const handleQuickAction = (data)=>{
        navigate('/CustomerDetails', {state:{action : data}});
    }
    return (
        <>
            <h4>Quick Actions</h4>
            <br />

            <div className='quick-actions'>
                <button onClick={()=>handleQuickAction("addNewCustomer")}>+ Add New Customer</button>
                <button onClick={()=>handleQuickAction("addPolicy")}>+ Add Policy</button>
                <button onClick={()=>handleQuickAction("UpdateCustomer")}>+ Update Customer</button>
                <button onClick={()=>handleQuickAction("veiwCustomers")}>View Customers</button>
            </div>
        </>
    )
}
