import CustomerDetails from "../features/customers/pages/CustomerDetails";
import IndividualCustomer from "../features/customers/pages/individual_customer/IndividualCustomer";
import Dashboard from "../features/dashboard/pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoute(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Dashboard></Dashboard>}></Route>
                    <Route path="/customer-details/:action" element={<CustomerDetails></CustomerDetails>}></Route>
                    <Route path="/individual_customer/:id" element={<IndividualCustomer></IndividualCustomer>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}