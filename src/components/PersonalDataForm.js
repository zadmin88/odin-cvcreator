import React from 'react'
import '../styles/formStyles.css'

export const PersonalDataForm = ({ personalData, changePersonalData }) => {
  //   const onChange = (e) => {
  //     setPersonalData({
  //       ...personalData,
  //       [e.target.name]: e.target.value,
  //     })
  //   }

  return (
    <div className='form'>
      <h2>Personal Information</h2>
      <form>
        <input
          type='text'
          name='name'
          value={personalData.name}
          placeholder='Complete name'
          onChange={changePersonalData}
        />
        <input
          type='text'
          name='title'
          value={personalData.title}
          placeholder='Title'
          onChange={changePersonalData}
        />
        <input
          type='text'
          name='phone'
          value={personalData.phone}
          placeholder='Phone'
          onChange={changePersonalData}
        />
        <input
          type='email'
          name='email'
          value={personalData.email}
          placeholder='Email'
          onChange={changePersonalData}
        />
        <input
          type='text'
          name='location'
          value={personalData.location}
          placeholder='Location'
          onChange={changePersonalData}
        />
        <textarea
          name='description'
          value={personalData.description}
          placeholder='Description'
          onChange={changePersonalData}
        />
      </form>
    </div>
  )
}
