import React, { useState } from 'react';
import axios from 'axios';
//useHistory for the redirection
import { useHistory } from 'react-router-dom';

const AddUser = () => {
  let history = useHistory();
  //for storing input fields
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  //destructuring
  const { name, username, email, phone, website } = user;
  //onchange method when user edit the name
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //function for the submitting of form data
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3003/users', user);
    history.push('/');
  };
  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Name'
              name='name'
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Username'
              name='username'
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control form-control-lg'
              placeholder='Enter Your E-mail Address'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Phone Number'
              name='phone'
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Website Name'
              name='website'
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className='btn btn-primary btn-block'>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
