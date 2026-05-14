export default function CustomerForm({newCustomer, handleChange, handleSubmit, formErrors}) {
    return(
    <>
        <h2 style={{textAlign:"center", paddingTop:"20px"}}>Enter the Customer details</h2>
        
        <form onSubmit={handleSubmit} className='customerDetails' noValidate>
            <div>
                <h3>Personal Details : </h3>

                <fieldset>
                    <label htmlFor="customer_name">Name</label>
                    <input
                        type="text"
                        id='customer_name'
                        name='personal_details.customer_name'
                        placeholder='Enter Customer Name'
                        value={newCustomer.personal_details.customer_name}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.customer_name &&
                        <span style={{color:"red"}}>{formErrors.customer_name}</span>
                    }
                </fieldset>

                <fieldset>
                    <legend>Gender</legend>

                    <label>
                        <input
                            type="radio"
                            name='personal_details.gender'
                            value='male'
                            checked={newCustomer.personal_details.gender === "male"}
                            onChange={handleChange}
                            required
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name='personal_details.gender'
                            value='female'
                            checked={newCustomer.personal_details.gender === "female"}
                            onChange={handleChange}
                        />
                        Female
                    </label>

                    <label>
                        <input
                            type="radio"
                            name='personal_details.gender'
                            value='other'
                            checked={newCustomer.personal_details.gender === "other"}
                            onChange={handleChange}
                        />
                        Other
                    </label>
                </fieldset>

                <fieldset>
                    <label htmlFor="date_of_birth">Date of Birth</label>
                    <input
                        type="date"
                        name="personal_details.date_of_birth"
                        id="date_of_birth"
                        value={newCustomer.personal_details.date_of_birth}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.date_of_birth &&
                        <span style={{color:"red"}}>{formErrors.date_of_birth}</span>
                    }
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        type='email'
                        name="personal_details.email"
                        id="email"
                        placeholder='Enter Customer Email'
                        value={newCustomer.personal_details.email}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.email &&
                        <span style={{color:"red"}}>{formErrors.email}</span>
                    }
                </fieldset>

                <fieldset>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type='tel'
                        name="personal_details.phone"
                        id="phone"
                        placeholder='Enter Customer Phone'
                        value={newCustomer.personal_details.phone}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.phone &&
                        <span style={{color:"red"}}>{formErrors.phone}</span>
                    }
                </fieldset>
            </div>

            <div>
                <h3>Address</h3>

                <fieldset>
                    <label htmlFor="street">Street</label>
                    <input
                        type='text'
                        name="address.street"
                        id="street"
                        placeholder='Enter Street'
                        value={newCustomer.address.street}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.street &&
                        <span style={{color:"red"}}>{formErrors.street}</span>
                    }
                </fieldset>

                <fieldset>
                    <label htmlFor="city">City</label>
                    <input
                        type='text'
                        name="address.city"
                        id="city"
                        placeholder='Enter City'
                        value={newCustomer.address.city}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.city &&
                        <span style={{color:"red"}}>{formErrors.city}</span>
                    }
                </fieldset>

                <fieldset>
                    <label htmlFor="state">State</label>
                    <input
                        type='text'
                        name="address.state"
                        id="state"
                        placeholder='Enter State'
                        value={newCustomer.address.state}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.state &&
                        <span style={{color:"red"}}>{formErrors.state}</span>
                    }
                </fieldset>

                <fieldset>
                    <label htmlFor="pincode">Pincode</label>
                    <input
                        type='text'
                        name="address.pincode"
                        id="pincode"
                        placeholder='Enter Pincode'
                        value={newCustomer.address.pincode}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.pincode &&
                        <span style={{color:"red"}}>{formErrors.pincode}</span>
                    }
                </fieldset>

            </div>

            <button type="submit">Submit</button>
        </form>
    </>
    )
}