import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import PatientReview from './components/PatientReview'
import ContactPage from './components/ContactPage'
import DoctorDetails from './components/DoctorDetails'
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppointmentPopup from './components/AppointmentPopup'



const App = () => {
  return (
    <div>
        
      <Navbar/>
      
      <section id="home">
      <Home/>
      </section>

      <AppointmentPopup/>

      <section id="services">
      <Services/>
      </section>

      <section id="about">
      <About/>
      </section>

      <section id="docter">
      <DoctorDetails/>
      </section>

      <PatientReview/>

      <section id="contact">
      <ContactPage/>
      </section>
      
      <Footer/> 
      
    </div>
  )
}

export default App

