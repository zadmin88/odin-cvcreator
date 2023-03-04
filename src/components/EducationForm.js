import React from 'react'

const EducationForm = ({ edu, educationData, setEducationData }) => {
  const onChange = (e) => {
    const newState = educationData.map((obj) => {
      if (obj.id === edu.id) {
        return {
          ...edu,
          [e.target.name]: [e.target.value],
        }
      }
      return obj
    })
    setEducationData(newState)
  }

  const deleteEdu = () => {
    const newState = educationData.filter((obj) => obj.id !== edu.id)
    setEducationData(newState)
  }

  return (
    <div className='form'>
      <h2>Education</h2>
      <form>
        <input
          type='text'
          name='course'
          value={edu.course}
          placeholder='Course'
          onChange={onChange}
        />
        <input
          type='text'
          name='institution'
          value={edu.institution}
          placeholder='Institution'
          onChange={onChange}
        />
        <input
          type='date'
          name='startDate'
          value={edu.startDate}
          placeholder='Start Date'
          onChange={onChange}
        />
        <input
          name='endDate'
          type='Date'
          value={edu.endDate}
          placeholder='End Date'
          onChange={onChange}
        />
        <input
          type='text'
          name='description'
          value={edu.description}
          placeholder='Description'
          onChange={onChange}
        />
      </form>
      <button onClick={deleteEdu}>Delete</button>
    </div>
  )
}

export default EducationForm
