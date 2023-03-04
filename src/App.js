import { useState } from 'react'
import { PersonalDataForm } from './components/PersonalDataForm'
import '../src/styles/main.css'
import { MainCV } from './components/MainCV'
import ExperienceForm from './components/ExperienceForm'
import EducationForm from './components/EducationForm'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [personalData, setPersonalData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    description: '',
  })

  const [experienceData, setExperienceData] = useState([])
  const [educationData, setEducationData] = useState([])

  const changePersonalData = (e) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    })
  }

  const showFormExp = () => {
    setExperienceData(
      experienceData.concat({
        id: uuidv4(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      })
    )
  }

  const showFormEdu = () => {
    setEducationData(
      educationData.concat({
        id: uuidv4(),
        course: '',
        institution: '',
        startDate: '',
        endDate: '',
        description: '',
      })
    )
  }

  return (
    <div className='App'>
      <PersonalDataForm
        personalData={personalData}
        changePersonalData={changePersonalData}
      />

      {experienceData.map((exp) => {
        return (
          <ExperienceForm
            key={exp.id}
            experinceData={experienceData}
            exp={exp}
            setExperienceData={setExperienceData}
          />
        )
      })}
      <button onClick={showFormExp}>Add experience</button>
      {educationData.map((edu) => {
        return (
          <EducationForm
            key={edu.id}
            educationData={educationData}
            edu={edu}
            setEducationData={setEducationData}
          />
        )
      })}
      <button onClick={showFormEdu}>Add Education</button>
      <MainCV
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
      />
    </div>
  )
}

export default App
