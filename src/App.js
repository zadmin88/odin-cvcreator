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
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat id reiciendis saepe enim iste nesciunt repellat laborum in minus optio, sit et qui laudantium. Quibusdam inventore quasi cupiditate? Libero asperiores ea rem commodi voluptatum minima soluta non harum saepe fuga! Impedit officiis, non quia corrupti aspernatur eligendi error laboriosam totam.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque quas ipsa earum deserunt amet quisquam animi quibusdam suscipit asperiores quam eveniet neque pariatur voluptatem ut qui dicta, optio fuga.',
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
      <div className='formsDiv'>
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
      </div>
      <MainCV
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
      />
    </div>
  )
}

export default App
