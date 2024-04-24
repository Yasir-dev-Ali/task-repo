import React  from 'react'
import SginIn from './Components/SginIn'
import SginUp from './Components/SginUp'


function App() {

  return (
   <>
 {/* First Sgin Up then Show page of the Sgin In ternory operatore */}
    <SginUp />
    <SginIn />
    {true ? <SginUp/> : <SginIn/>  }



  

  


 


   </>
  )
}

export default App
