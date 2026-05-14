import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import '../pages/CustomerDetails.css'
import AddNewCustomer from '../components/addNewCustomer/AddNewCustomer';
import AddPolicy from '../components/addPolicy/AddPolicy';
import UpdateCustomer from '../components/updateCustomer/UpdateCustomer';
import ViewCustomers from '../components/viewCustomers/ViewCustomers';

export default function CustomerDetails() {
  const {action} = useParams();
  let display;

  switch (action) {
    case "addNewCustomer": 
      display = <AddNewCustomer />;
      break;
    case "addPolicy": 
      display = <AddPolicy />;
      break;
    // case "UpdateCustomer": 
    //   display = <UpdateCustomer />;
    //   break;
    case "viewCustomers": 
      display = <ViewCustomers />;
      break;
    default: 
      return <Navigate to="/customer-details/viewCustomers" replace/>
  }

  return (
    <>
      <div className='customerDetails-header'>
        <Link to='/' className='homeLink'>Home</Link>
        <h3>{(action ??"").replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()).trim()}</h3>
      </div>

      <div>{display}</div>
    </>
  )
}
