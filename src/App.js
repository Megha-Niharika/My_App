import React from "react"
//import ReactDOM from 'react-dom';
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
import './style.css'
import Contact from "./Contact";

import MapData from "./MapData"

function App()
{
  const MapComp = MapData.map(contact => <Contact key={contact.id} name={contact.name} phone={contact.phone} email={contact.email}/>)

  // const nums = [1,2,3,4,5]
  // const doubled = nums.map(function(num){
  //   return num*2;
   
  // })
  // console.log(doubled)

 return (
   <div>
 {MapComp}


{/* <Contact
name="megha"
phone="55555555"
email="megha.hs@gmail.com"
/>
<Contact
name="abhay"
phone="55555555"
email="abhay@gmail.com"
/>
<Contact
name="niha"
phone="55555555"
email="niha@gmail.com"
/>
<Contact
name="viv"
phone="55555555"
email="viv@gmail.com"
/> */}


</div>
 )




//     <div>
//     <Header />
//     <MainContent />
//   <Footer />
// </div>
  // )
}

export default App;

