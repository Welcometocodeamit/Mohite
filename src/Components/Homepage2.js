import React from 'react'
import Card from './Card'

export default function Homepage2() {
  return (
    <div id='homepage2'>
        <div id='h2heading'>
            <h1 style={{fontSize:'65px' ,fontWeight: '900'}}>Want to <span id='join'>Join</span> Us?</h1>
            <h1 style={{fontSize:'24px', lineHeight:'38px'}}>To remain with us, it is essential that you diligently follow the steps provided</h1>
        </div>
        <div id='cardsdiv'>
        <Card no='1' sup='st' title='Commencement of business' info='Invested shareholders must confirm payment and office address' due='Within 180 days' amt1='₹50,000' amtc1='for the company' amt2='₹1,000' amtc2='/day for directors'/>

        <Card no='2' sup='nd' title='Auditor Appointment' info='Company informs new auditor and submits ADT.1 form to ROC.' due='Within 30 days' amt1='₹300' amtc1='per month.' />

        <Card no='3' sup='rd' title='DIN eKYC' info='Directors share personal information for identification & verification' due='Every Year' amt1='₹5,000' amtc1='one time'/>

        <Card no='4' sup='th' title='DPT-3' info='Companies report money taken from people to ROC; auditors confirm details.' due='Within 30 days'  amt1='₹300' amtc1='per month.'/>

        <Card no='5' sup='th' title='MCA Form AOC-4' info="'It's like an official report card for a company's documents'" due='On or Before 30th November' amt1='₹200' amtc1='per day (No upper limit)*'/>

        <Card no='6' sup='th' title='MCA Form MGT-7' info='Companies must annually report activities and finances to the registrar.' due='On or Before 31st December' amt1='₹200' amtc1='per day (No upper limit)*'/>
        </div>

        <p id='h2aftc'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
        
    </div>
  )

}
