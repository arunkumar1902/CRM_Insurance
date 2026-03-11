import CustomerDetails from "../features/customers/pages/CustomerDetails";
import Dashboard from "../features/dashboard/pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoute(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Dashboard></Dashboard>}></Route>
                    <Route path="/customer-details/:action" element={<CustomerDetails></CustomerDetails>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}