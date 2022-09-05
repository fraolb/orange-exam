import React, {useState} from 'react'

const UserPage = () => {
    const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
    const [bool ,setBool] = useState(false)
    const Name ="Abebe"
    const Password ="Abebe12345"

    const handleSubmit = (e) => {
        e.preventDefault();
        firstName==Name && password==Password ? setBool(true) : <h2>Enter ur password again</h2>
      };

  return (
    <div>
        <h1>This is the user page</h1>
        <h2>Please Enter your Password to login</h2>
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
    </div>
  )
}

export default UserPage