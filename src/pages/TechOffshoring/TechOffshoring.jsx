import React from 'react'
import './TechOffshoring.css'
import Navbar from '../../components/Navbar/Navbar'
import OffshoringSolutions from '../../components/OffshoringSolutions/OffshoringSolutions'
import Surecomp from '../../components/Surecomp/Surecomp'
import Saama from '../../components/Saama/Saama'
import SecurityFocused from '../../components/SecurityFocused/SecurityFocused'
import ProcessExplained from '../../components/ProcessExplained/ProcessExplained'
import TeamExpertise from '../../components/TeamExpertise/TeamExpertise'
import Specialisation from '../../components/Specialisation/Specialisation'
import Footers from '../../components/Footers/Footers'
import Accordian from '../../components/Accordian/Accordian'

const TechOffshoring = () => {
  return (
    <div>
      <Navbar/>
      <OffshoringSolutions/>
      <Surecomp/>
      <Saama/>
      <SecurityFocused/>
      <ProcessExplained/>
      <TeamExpertise/>
      <Specialisation/>
      <Accordian/>
      <Footers/>
    </div>
  )
}

export default TechOffshoring
