export const calculateUpcomingRenewals = (customerDetails) => {
    return customerDetails.flatMap(customer => (
        customer.policies.filter(data => {
            const dueDate = new Date(data.dueDate);
            return (
                data.renewalStatus === "Pending" &&
                dueDate.getMonth() === new Date().getMonth() &&
                dueDate.getFullYear() === new Date().getFullYear()
            );
        }).map(policy => ({
            "customerName": customer.personalDetails.customerName,
            "policyType": policy.policyType,
            "policyNumber": policy.policyNumber,
            "endDate": policy.endDate,
            "daysLeft": Math.ceil((new Date(policy.dueDate) - new Date()) / (1000 * 60 * 60 * 24)),
        }))
    ));

}