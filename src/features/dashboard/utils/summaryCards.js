export const calculateActivePolicyCount = (policyDetail)=>{
    return policyDetail.filter((data)=> data.status === "Active").length;
}

export const calculateRenewalsThisMonth = (policyDetail)=>{
    return policyDetail.filter(data => {
            const renewalDate = new Date(data.renewal_date);
            return(
                renewalDate.getMonth() === new Date().getMonth() &&
                renewalDate.getFullYear() === new Date().getFullYear()
            );
        }).length;
}

export const calculatePendingRemindersCount = (policyDetail)=>{
    return policyDetail.filter(data => data.reminder_sent === false).length;
}