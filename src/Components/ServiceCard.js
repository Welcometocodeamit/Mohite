import React from 'react'
import eimg from '../Assets/entityimg.png'

import star from '../Assets/star-fill.svg'

export default function ServiceCard(props) {
  return (
    <div id='scard'>
        <img src={eimg} height={'244px'} width={'405px'}/>
        <div id='scardheading'>
            <h3><b>{props.name}</b></h3>
            <p><b>{props.price}</b></p>
        </div>
        <p>I will do business evaluation and corporate services</p>
        <div id='star' style={{paddingLeft:'20px'}}>
            <img src={star} alt='star' width={'24px'} height={'24px'} style={{paddingTop:'12px'}}/>&nbsp;&nbsp;
            <p style={{paddingTop:'10px'}}><span id='starrate'>{props.star}</span> ({props.rating})</p>
        </div>

        <div id='scardbtn'>
            <button id='scardbtnin'>View Services</button>
        </div>


    </div>
  )
}
