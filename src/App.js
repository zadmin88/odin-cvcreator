import { useState } from 'react'
import { PersonalDataForm } from './components/PersonalDataForm'
import '../src/styles/main.css'

function App() {
  const [personalData, setPersonalData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    description: '',
  })

  const changePersonalData = (e) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='App'>
      <PersonalDataForm
        personalData={personalData}
        changePersonalData={changePersonalData}
      />
    </div>
  )
}

export default App
