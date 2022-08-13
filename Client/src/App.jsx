import { Navbar ,Welcome , Services , Footer ,   Transactions } from './components'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      {/* Hello world! */}
    
      <Services />
      <Transactions />
      <Footer />
      
    </div>
  );
}

export default App ;
