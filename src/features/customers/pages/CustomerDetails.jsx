import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../pages/CustomerDetails.css'
import AddNewCustomer from '../components/AddNewCustomer';
import AddPolicy from '../components/AddPolicy';
import UpdateCustomer from '../components/UpdateCustomer';
import ViewCustomers from '../components/ViewCustomers';

export default function CustomerDetails() {
  const location = useLocation();
  let display;
  const [action, setAction] = useState(location.state?.action);

  switch (action) {
    case "addNewCustomer": 
      display = <AddNewCustomer />;
      break;
    case "addPolicy": 
      display = <AddPolicy />;
      break;
    case "UpdateCustomer": 
      display = <UpdateCustomer />;
      break;
    case "viewCustomers": 
      display = <ViewCustomers />;
      break;
    default: 
      setAction("viewCustomers");
  }

  return (
    <>
      <div className='customerDetails-header'>
        <Link to='/' className='homeLink'>Home</Link>

        <section className='customer-actions'>
          <button className={action === 'addNewCustomer'?'active':''} onClick={()=>setAction("addNewCustomer")}>Add New Customer</button>
          <button className={action === 'addPolicy'?'active':''} onClick={()=>setAction("addPolicy")}>Add Policy</button>
          <button className={action === 'UpdateCustomer'?'active':''} onClick={()=>setAction("UpdateCustomer")}>Update Customer</button>
          <button className={action === 'viewCustomers'?'active':''} onClick={()=>setAction("viewCustomers")}>View Customer</button>
        </section>
      </div>

      <hr />

      <div>{display}</div>
    </>
  )
}
