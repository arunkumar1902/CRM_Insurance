export const calculateUpcomingRenewals = (policyDetails) => {
    return policyDetails.filter(data => {
            const renewalDate = new Date(data.renewal_date);
            return (
                renewalDate.getMonth() === new Date().getMonth() &&
                renewalDate.getFullYear() === new Date().getFullYear()
            );
        }).map(policy => ({
            "customerName": policy.customer_name,
            "policyType": policy.policy_type,
            "policyNumber": policy.policy_number,
            "renewalDate": policy.renewal_date,
            "daysLeft": Math.ceil((new Date(policy.renewal_date) - new Date()) / (1000 * 60 * 60 * 24)),
        }))
}