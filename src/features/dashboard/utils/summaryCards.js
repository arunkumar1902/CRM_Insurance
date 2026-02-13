export const calculateActivePolicyCount = (customersDetail)=>{
    return customersDetail.reduce((init, customer)=>{
        const activeCount = customer.policies.filter((data)=> data.status === "Active");
        return init + activeCount.length;
    }, 0);
}

export const calculateRenewalsThisMonth = (customersDetail)=>{
    return customersDetail.reduce((init, customer) =>{
        const pendingRenewals = customer.policies.filter(data => {
            const dueDate = new Date(data.dueDate);
            return(
                data.renewalStatus ===  "Pending" &&
                dueDate.getMonth() === new Date().getMonth() &&
                dueDate.getFullYear() === new Date().getFullYear()
            );
        });
        return init + pendingRenewals.length;
    }, 0);
}

export const calculatePendingRemindersCount = (customersDetail)=>{
    return customersDetail.reduce((init, customer)=>{
        const reminders = customer.policies.filter(data => data.reminderSent === false);
        return init + reminders.length;
    }, 0);
}