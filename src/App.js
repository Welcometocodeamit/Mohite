import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';

import Footer from './Components/Footer'
import Entity from './Components/Entity'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { useState } from 'react';
import DownFooter from './Components/DownFooter';

function App() {
  let arr=[{
    "id": 8,
    "name": "Nina Johansson",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?fit=crop&w=800&q=80",
    "intro": "Specializes in financial forensics and fraud examination.",
    "rating": 4.9,
    "reviewCount": 92,
    "taskComplexity": "Advanced forensic tasks",
    "price": "€5,150",
    "deliveryTime": "Delivers within 5 days",
    "testimonial": {
      "text": "Nina's forensic skills have been instrumental in protecting our firm from potential financial frauds.",
      "author": "Marcus Blom"
    },
    "about": {
      "from": "SWEDEN",
      "partnerSince": 2013,
      "averageResponseTime": "26 minutes",
      "description": "Focused on protecting businesses through financial forensics and fraud examination.",
      "services": [
        "Financial forensics",
        "Fraud examination",
        "Risk management"
      ],
      "benefits": ["Financial protection", "Fraud prevention"]
    }
  }]

  let [array, setArray]=useState([arr])
   async function getDataFunct(data){
    setArray([data])
    console.log(data)
    console.log(array[0][0].name)
  }

  return(
        <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage getDataFunct={getDataFunct}/>}/>
          <Route path='/service' element={<Entity name={array[0][0].name} intro={array[0][0].intro} rating={array[0][0].rating} reviewcount={array[0][0].reviewCount} taskComplexity={array[0][0].taskComplexity} price={array[0][0].price} testimony={array[0][0].testimonial.text} from={array[0][0].about.from} partnerSince={array[0][0].about.partnerSince } averageResponseTime={array[0][0].about.averageResponseTime}  description={array[0][0].about.description} services={array[0][0].about.services} benifits={array[0][0].about.benefits} image={array[0][0].image}/>}/>
        </Routes>
        <Footer/>
        <DownFooter/>
        </>
  );
}

export default App;
