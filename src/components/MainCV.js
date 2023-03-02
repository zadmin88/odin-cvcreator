import React from 'react'

export const MainCV = ({ personalData, experienceData }) => {
  return (
    <div className='mainCv'>
      <div className='personalData'>
        <h3>{personalData.name}</h3>
        <h4>{personalData.title}</h4>
        <p>{personalData.phone}</p>
        <p>{personalData.email}</p>
        <p>{personalData.location}</p>
        <p>{personalData.description}</p>
      </div>
      <p>---------------------------</p>
      <div className='experienceData'>
        {experienceData.map((obj, idx) => {
          return (
            <div key={idx}>
              <h3>{obj.company}</h3>
              <h2>{obj.position}</h2>
              <p>{obj.startDate}</p>
              <p>{obj.endDate}</p>
              <p>{obj.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
