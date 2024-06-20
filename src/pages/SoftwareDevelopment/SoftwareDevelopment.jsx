import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import VenzoSoftware from '../../components/VenzoSoftware/VenzoSoftware'
import EveryIndustry from '../../components/EveryIndustry/EveryIndustry'
import CardDetails from '../../components/CardDetails/CardDetails'
import OurApproach from '../../components/OurApproach/OurApproach'
import Management from '../../components/Management/Management'
import Footer from '../../components/Footer/Footer'
import ShipProducts from '../../components/ShipProducts/ShipProducts'
import WorksToShowcase from '../../components/WorksToShowcase/WorksToShowcase'

const SoftwareDevelopment = () => {
  return (
    <div>
      <Navbar/>
      <VenzoSoftware/>
      <EveryIndustry/>
      <CardDetails/>
      <ShipProducts/>
      <OurApproach/>
      <Management/>
      <WorksToShowcase/>
      <Footer/>
    </div>
  )
}

export default SoftwareDevelopment
