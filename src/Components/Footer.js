import React from 'react'
import logo from '../Assets/logo.png'
import fb from '../Assets/fb.png'
import insta from '../Assets/insta.png'
import linkedin from '../Assets/linkedin.png'
import wp from '../Assets/whatsapp logo.png'

export default function () {
  return (
    <div id='footermain'>
    <div id='footer'>
        <div>
            <img src={logo} height={'45px'} width={'138px'}/>
            <p style={{width:'272px', margin:'15px 0px'}}>India's first platform dedicated to simplifying partner search</p>
        </div>

        <div>
            <h3 style={{fontWeight:'700'}}>COMPANY</h3>
            <p style={{margin:'15px 0px'}}>About</p>
            <p style={{margin:'15px 0px'}}>Pricing</p>
            <p style={{margin:'15px 0px'}}>Careers</p>
        </div>

        <div>
            <h3 style={{fontWeight:'700'}}>SOLUTIONS</h3>
            <p style={{margin:'15px 0px'}}>Search</p>
            <p style={{margin:'15px 0px'}}>Connect</p>
            <p style={{margin:'15px 0px'}}>Research</p>
            <p style={{margin:'15px 0px'}}>Academy</p>
        </div>

        <div>
            <h3 style={{fontWeight:'700'}}>RESOURCE</h3>
            <p style={{margin:'15px 0px'}}>Blogs</p>
            <p style={{margin:'15px 0px'}}>Forms</p>
        </div>

        <div>
            <h3 style={{fontWeight:'700'}}>SUPPORT</h3>
            <p style={{margin:'15px 0px'}}>Help</p>
            <p style={{margin:'15px 0px'}}>Contact Us</p>
        </div>

        <div>
            <h3 style={{fontWeight:'700'}}>LEGAL</h3>
            <p style={{margin:'15px 0px'}}>Privacy</p>
            <p style={{margin:'15px 0px'}}>Terms</p>
            <p style={{margin:'15px 0px'}}>Accessiblity</p>
        </div>

    </div>

    <hr/>
        <div style={{display:"flex", justifyContent:'space-evenly'}} id='fdown'>
            <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div id='footericon' style={{display:'flex'}}>
                <img src={fb} height={'24px'}  alt='fb'/>
                <img src={insta} height={'24px'}  alt='fb'/>
                <img src={linkedin} height={'24px'}  alt='fb'/>
                <img src={wp} height={'24px'}  alt='fb'/>
            </div>
            
        </div>
    </div>
  )
}
