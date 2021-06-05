import React, { useEffect } from 'react';

const Form = (props) => {

    const { values, setFormValues, update, submit, edit } = props;

    const changeHandler = e => {
        const inputName = e.target.name
        const inputValue = e.target.value
        update(inputName, inputValue)
    }

    const submitHandler = e => {
        e.preventDefault()
        submit()
    }

    useEffect(() => {
        edit && setFormValues(edit)
    }, [edit])

    return(
        <div className='FormCard'>
            <form className='ui form' onSubmit={submitHandler}>
                <h4 className='ui dividing header'>Add Members To Your Team!</h4>
                    <div className='field'>
                        <label>Name
                            <div className='two fields'>
                                <div className='field' >
                                    <input type='text' name='firstName' placeholder="First Name" value={values.firstName} onChange={changeHandler} />
                                </div>
                                <div className='field'>
                                    <input type='text' name='lastName' placeholder="Last Name" value={values.lastName} onChange={changeHandler} />
                                </div>
                            </div>
                        </label>
                        <label>Position
                            <select className='ui selection dropdown' name='position' value={values.position} onChange={changeHandler} >
                                    <option className='item' value={null} >--- Position ---</option>
                                    <option className='item' >Frontend</option>
                                    <option className='item' >Backend</option>
                                    <option className='item' >UX Designer</option>
                            </select>
                        </label>
                        <label>Email
                            <div className='field'>
                                <input type='email' name='email' value={values.email} onChange={changeHandler} />
                            </div>
                        </label>
                        <label>Phone
                            <div className='field'>
                                <input type='tel' name='phone' value={values.phone} onChange={changeHandler} />
                            </div>
                        </label>
                        requested format: 123-456-7890
                </div>
                <button className='ui submit button'>Submit</button>
            </form>
        </div>
    )
};

export default Form;