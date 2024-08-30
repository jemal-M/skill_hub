import React from 'react'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'

const HomeLayout = ( {
    children
  }: {
    children: React.ReactNode;
  }
  ) => {
  return (
    <div>
<Navbar />
{children}
<Footer />
    </div>
  )
}

export default HomeLayout