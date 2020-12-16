import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';





const PersonalDetails = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );



    return (

        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='personaldetails' noValidate>
                <h1><center>Personal Details</center></h1>
                <div className="form-input">

                    <input
                        className='form-input'
                        type='text'
                        name='salutation'
                        placeholder='Salutation'
                        value={values.salutation}
                        onChange={handleChange} />
                    {errors.salutation && <p>{errors.salutation}</p>}
                </div><br /><br />

                <div className="form-input">

                    <input
                        className='form-input'
                        type='text'
                        name='firstname'
                        placeholder='Fisrt Name'
                        text
                        value={values.firstname}
                        onChange={handleChange} />
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div><br /><br />

                <div className="form-input">

                    <input
                        id="lastname"
                        className='form-input'
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                        value={values.lastname}
                        onChange={handleChange} />
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div><br /><br />

                <div className="form-input">

                    <input
                        className='form-input'
                        type='date'
                        name='birthdate'
                        placeholder='My Birth Date'
                        value={values.birthdate}
                        onChange={handleChange} />
                    {errors.birthdate && <p>{errors.birthdate}</p>}
                </div><br /><br />

                <div className="form-input">

                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div><br /><br />

                <div className="form-input">

                    <input
                        className='form-input'
                        type='number'
                        name='quote'
                        placeholder='Send me the Quote'
                        value={values.quote}
                        onChange={handleChange} />
                    {errors.quote && <p>{errors.quote}</p>}
                </div><br /><br />

                <div className="form-input">

                    <input
                        className='form-input'
                        type='number'
                        name='ssn'
                        placeholder='SSN Number'
                        value={values.ssn}
                        onChange={handleChange} />
                    {errors.ssn && <p>{errors.ssn}</p>}
                </div><br /><br />

                <div className="form-input">

                    <input
                        className='form-input'
                        type='dropdown'
                        name='source'
                        placeholder='Source Of Income'
                        // value="Employed"
                        // value="SelfEmployed"
                        // value="UnEmployed"
                        value={values.source}
                        onChange={handleChange} />
                    {errors.source && <p>{errors.source}</p>}
                </div><br /><br />

                <button onClick={event => window.location.href = 'http://localhost:3000/c2'} className='form-input-btn' type='submit'>
                    Done
                </button>




            </form>
        </div>
    )
}

export default PersonalDetails
