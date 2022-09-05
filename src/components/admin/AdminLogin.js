import React, {useState} from 'react'

import AdminPage from './AdminPage';

const AdminLogin = () => {
    const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
    const [bool ,setBool] = useState(false)
    const Name ="Abebe"
    const Password ="Abebe12345"

    const handleSubmit = (e) => {
        e.preventDefault();
        firstName==Name && password==Password ? setBool(true) : <h2>Enter ur password</h2>
      };


  return (
    <div>
        <h1>Please Enter your Password</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password : </label>
            <input
              type='text'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          <button type='submit' className='btn'>Login</button>
        </form>
        {
           bool== true ? <AdminPage /> : "Add ur password"
        }
    </div>
  )
}

export default AdminLogin