import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Products from '../../components/Products/Products'
import Clientsworked from '../../components/Clientsworked/Clientsworked'
import HoverText from '../../components/Hovertext/Hovertext'
import Footer from '../../components/Footer/Footer'
import Venzoworks from '../../components/venzoworks/venzoworks'
import Successstories from '../../components/Successstories/Successstories'
import Happyminds from '../../components/Happyminds/Happyminds'
import WhatYouGet from '../../components/WhatYouGet/WhatYouGet'



const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <HoverText/>
      <Venzoworks/>
      <Successstories/>
      <Products/>
      <WhatYouGet/>
      <Happyminds/>
      <Clientsworked/>
      <Footer/>
    </div>
  )
}

export default Landingpage
