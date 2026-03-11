export default function CustomerEmailForm({customerEmail, setCustomerEmail, handleCustomerDetailsForm, handleClear}) {
    return (
        <>
            <form onSubmit={handleCustomerDetailsForm}>
                <h3>Customer Details</h3>
                <fieldset>
                    <label htmlFor="email">Enter Customer Email: </label>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        placeholder='Enter Customer Email'
                        value={customerEmail}
                        onChange={(event) => setCustomerEmail(event.target.value)}
                        required />
                </fieldset>

                <button type='submit'>Enter</button>
                <button type='button' onClick={handleClear}>Clear</button>
            </form>
        </>
    )
}