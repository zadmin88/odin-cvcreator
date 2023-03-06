import React from 'react'
import '../styles/CVStyle.css'
import mail from '../images/mail.svg'
import mappin from '../images/mappin.svg'
import phonecall from '../images/phonecall.svg'

export const MainCV = ({ personalData, experienceData, educationData }) => {
  return (
    <div className='mainCv'>
      <div className='personalData'>
        <div className='nameTitle'>
          <h3>{personalData.name}</h3>
          <h4>{personalData.title}</h4>
        </div>
        <div className='contactInfo'>
          <p>
            <img src={phonecall} alt='phone' />
            {personalData.phone}
          </p>
          <p>
            <img src={mail} alt='Email' />
            {personalData.email}
          </p>
          <p>
            <img src={mappin} alt='location' />
            {personalData.location}
          </p>
        </div>
        <div className='description'>
          <h2>Description</h2>
          <p>{personalData.description}</p>
        </div>
      </div>

      <div className='experienceData'>
        <h2>Experience</h2>
        {experienceData.map((obj, idx) => {
          return (
            <div key={idx}>
              <h3>{obj.company}</h3>
              <h4>{obj.position}</h4>
              <p>Start date: {obj.startDate}</p>
              <p>End date: {obj.endDate}</p>
              <p>{obj.description}</p>
            </div>
          )
        })}
      </div>
      <div className='educationData'>
        <h2>Education</h2>
        {educationData.map((obj, idx) => {
          return (
            <div key={idx}>
              <h3>{obj.course}</h3>
              <h4>{obj.institution}</h4>
              <p>{obj.startDate}</p>
              <p>{obj.endDate}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
