import React from 'react'
import '../styles/formStyles.css'

const ExperienceForm = ({ exp, experinceData, setExperienceData }) => {
  const onChange = (e) => {
    const newState = experinceData.map((obj) => {
      if (obj.id === exp.id) {
        return {
          ...exp,
          [e.target.name]: [e.target.value],
        }
      }
      return obj
    })
    setExperienceData(newState)
  }

  const deleteExp = () => {
    const newState = experinceData.filter((obj) => obj.id !== exp.id)
    setExperienceData(newState)
  }

  return (
    <div className='form'>
      <h2>Experience</h2>
      <form>
        <input
          type='text'
          name='company'
          value={exp.company}
          placeholder='Company'
          onChange={onChange}
        />
        <input
          type='text'
          name='position'
          value={exp.position}
          placeholder='position'
          onChange={onChange}
        />
        <input
          type='date'
          name='startDate'
          value={exp.startDate}
          placeholder='Start Date'
          onChange={onChange}
        />
        <input
          name='endDate'
          type='Date'
          value={exp.endDate}
          placeholder='End Date'
          onChange={onChange}
        />
        <input
          type='text'
          name='description'
          value={exp.description}
          placeholder='Description'
          onChange={onChange}
        />
      </form>
      <button onClick={deleteExp}>Delete</button>
    </div>
  )
}

export default ExperienceForm
