export default function PolicyForm({policyData, setShowPolicyForm, handlePolicyData, handlePolicyDataSubmit, formErrors}){
    return(
        <>
            <form onSubmit={handlePolicyDataSubmit} noValidate>

            <fieldset>
              <label htmlFor="policy_type">Policy Type</label>
              <input 
                type="text" 
                id='policy_type' 
                name='policy_type' 
                placeholder='Enter Policy Type' 
                value={policyData.policy_type} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.policy_type && 
                <span style={{color:"red"}}>{formErrors.policy_type}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="provider">Provider</label>
              <input 
                type="text" 
                id='provider' 
                name='provider' 
                placeholder='Enter Policy Provider' 
                value={policyData.provider} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.provider && 
                <span style={{color:"red"}}>{formErrors.provider}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="premium_amount">Premium Amount</label>
              <input 
                type="text" 
                id='premium_amount' 
                name='premium_amount' 
                placeholder='Enter Premium Amount' 
                value={policyData.premium_amount} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.premium_amount && 
                <span style={{color:"red"}}>{formErrors.premium_amount}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="premium_frequency">Premium Frequency</label>
              <select name="premium_frequency" id="premium_frequency" value={policyData.premium_frequency} onChange={handlePolicyData}>
                <option value="">--- Select Frequency ---</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Half-Yearly">Half-Yearly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="sum_assured">Sum Assured</label>
              <input 
                type="text"
                id='sum_assured' 
                name='sum_assured' 
                placeholder='Enter Sum Assured' 
                value={policyData.sum_assured} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.sum_assured && 
                <span style={{color:"red"}}>{formErrors.sum_assured}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="payment_mode">Payment Mode</label>
              <select name="payment_mode" id="payment_mode" value={policyData.payment_mode} onChange={handlePolicyData}>
                <option value="">--- Select Payment Mode ---</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="DebitCard">Debit Card</option>
                <option value="CreditCard">Credit Card</option>
                <option value="Cheque">Cheque</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="start_date">Start Date</label>
              <input 
                type="date" 
                id='start_date' 
                name='start_date' 
                placeholder='Enter Start Date' 
                value={policyData.start_date} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.start_date && 
                <span style={{color:"red"}}>{formErrors.start_date}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="end_date">End Date</label>
              <input 
                type="date" 
                id='end_date' 
                name='end_date' 
                placeholder='Enter End Date' 
                value={policyData.end_date} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.end_date && 
                <span style={{color:"red"}}>{formErrors.end_date}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="renewal_date">Renewal Date</label>
              <input 
                type="date" 
                id='renewal_date' 
                name='renewal_date' 
                placeholder='Enter Renewal Date' 
                value={policyData.renewal_date} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.renewal_date && 
                <span style={{color:"red"}}>{formErrors.renewal_date}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="status">Status</label>
              <select name="status" id="status" value={policyData.status} onChange={handlePolicyData}>
                <option value="">--- Select Status ---</option>
                <option value="Active">Active</option>
              </select>
            </fieldset>

            <h3>-------------------- Nominee Details --------------------</h3>

            <fieldset>
              <label htmlFor="nominee_name">Nominee Name</label>
              <input 
                type="text" 
                id='nominee_name' 
                name='nominee_name' 
                placeholder='Enter Nominee Name' 
                value={policyData.nominee_name} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.nominee_name && 
                <span style={{color:"red"}}>{formErrors.nominee_name}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="nominee_relationship">Nominee Relationship</label>
              <input 
                type="text" 
                id='nominee_relationship' 
                name='nominee_relationship' 
                placeholder='Enter Nominee Relationship' 
                value={policyData.nominee_relationship} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.nominee_relationship && 
                <span style={{color:"red"}}>{formErrors.nominee_relationship}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="nominee_phone">Nominee Phone Number</label>
              <input 
                type="text" 
                id='nominee_phone' 
                name='nominee_phone' 
                placeholder='Enter Nominee Phone Number' 
                value={policyData.nominee_phone} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.nominee_phone && 
                <span style={{color:"red"}}>{formErrors.nominee_phone}</span>
              }
            </fieldset>

            <fieldset>
              <label htmlFor="customer_notes">Customer Notes</label>
              <input 
                type="text" 
                id='customer_notes' 
                name='customer_notes' 
                placeholder='Enter Customer Notes' 
                value={policyData.customer_notes} 
                onChange={handlePolicyData} 
                required
              />
              {formErrors.customer_notes && 
                <span style={{color:"red"}}>{formErrors.customer_notes}</span>
              }
            </fieldset>

            <button type='submit'>Submit</button>
            <button type='button' onClick={()=>setShowPolicyForm(false)}>Cancel</button>

          </form>
        </>
    )
}