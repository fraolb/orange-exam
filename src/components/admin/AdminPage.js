import React, { useState } from 'react'

import './AdminPage.css'

function AdminPage() {
  const [user, setUser] = useState({ email:'', firstName: '',lastName: '',gender:'', dateOfBirth:'',phoneNumber:'',address:''});//to add to the form where the admin adds employees
  const [employee, setEmployee] = useState([]);//the data of the whole employees added

  //for every form added this handleChange adds the form data to the user 1 by 1
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //when new employee is added this add new user to the data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.firstName && user.lastName && user.gender && user.dateOfBirth && user.phoneNumber && user.address) {
      const newUser = { ...user, id:user.email };//this is created to assign the id of the new added user to the data
      setEmployee([...employee, newUser]);
      setUser({  email: '',firstName: '', lastName: '',gender:'', dateOfBirth:'',phoneNumber:'',address:''});
    }
  };

  //to remove the employee
  const removeEmployee= (id) => {
    let newUsers = employee.filter((person) => person.id !== id);
    setEmployee(newUsers);
  };

  return (
    <div>
         <article className='form'>
        <form>
        <h3>Add Employee</h3>
        <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'>First Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={user.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='lastName'>Last Name : </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={user.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='gender'>Gender : </label>
            <input
              type='text'
              id='gender'
              name='gender'
              value={user.gender}
              onChange={handleChange}
            />
          </div>
        
          <div className='form-control'>
            <label htmlFor='dateOfBirth'>Date Of Birth : </label>
            <input
              type='text'
              id='dateOfBirth'
              name='dateOfBirth'
              value={user.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='phoneNumber'>Phone Number : </label>
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              value={user.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='address'>Address : </label>
            <input
              type='text'
              id='address'
              name='address'
              value={user.address}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            Add person
          </button>
        </form>
      </article>
      <article>
        
                <table className="center">
                    <tr className='form'>
                        <th>Email</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Phone Number</th>
                    </tr>
                    {employee.map((person) => {
          const { id, firstName,lastName,gender, email, dateOfBirth,phoneNumber } = person;
          return (
                    <tr key={id} className='form'>
                        <th>{email}</th>
                        <th>{firstName}</th>
                        <th>{lastName}</th>
                        <th>{gender}</th>
                        <th>{dateOfBirth}</th>
                        <th>{phoneNumber}</th>
                        <th><button onClick={() => removeEmployee(id)}>remove</button></th>
                    </tr>
                      );
                    })}
                </table>
              
    
        
      </article>
    </div>
  )
}

export default AdminPage

