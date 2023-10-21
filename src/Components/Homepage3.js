import React from 'react'
import i1 from '../Assets/search.svg'
import i2 from '../Assets/enquire.svg'
import i3 from '../Assets/report.svg'
import i4 from '../Assets/hat.svg'

import boy from '../Assets/Charlotte May.png'
import girl from '../Assets/MART PRODUCTION.png'

export default function homepage3 () {
  return (
    <div id='mainhomepage3'>
    <div id='homepage3'>
        <div id='righth3'>
            <div id='h3rheading'>
                <h3><span id='allinone'>All-in-One</span> platform that Makes Easier</h3>
            </div>

            <div id='h3rinfo'>
                <p>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
            </div>

            <div id='h3rcards'>
                <div className='h3rcard'>
                    <img src={i1} height={'65px'} width={'65px'} alt='i1' />
                    <p style={{width:'205px', margin:'0px 10px'}}><b>SEARCH</b> for vital company information</p>
                </div>

                <div className='h3rcard'>
                    <img src={i2} height={'65px'} width={'65px'} alt='i2' />
                    <p style={{width:'205px', margin:'0px 10px'}}><b>CONNECT</b> with the resources to meet your business needs</p>
                </div>

                <div className='h3rcard'>
                    <img src={i3} height={'65px'} width={'65px'} alt='i3' />
                    <p style={{width:'205px', margin:'0px 10px'}}><b>RESEARCH</b> and generate reports that drive growth</p>
                </div>

                <div className='h3rcard'>
                    <img src={i4} height={'65px'} width={'65px'} alt='i4' />
                    <p style={{width:'205px', margin:'0px 10px'}}><b>ACADEMY</b> to give you the skills for success in your career</p>
                </div>
            </div>

        </div>

        <div id='lefth3'>
            <div id='updiv'>
                <div id='rightupdiv'>
                    <p className='chatbox'>Hey, check out loreumipsum services.</p>
                    <p className='chatbox'>I learned from their videos, got my first job.</p>
                    <p className='chatbox'>You won't be disappointed with their services.</p>
                </div>

                <div id='leftupdiv'>
                    <img src={boy} height={'336.326px'} width={'281.694px'} alt='boy'/>
                </div>

            </div>
            <div id='downdiv'>
                <div className='gchatbox'>
                    <p>I got a perfect analysis report from them too</p>
                    <p>Oh, that's great.</p>

                </div>
                <div>
                <img src={girl} height={'336.326px'} width={'281.694px'} alt='girl'/>
                </div>

            </div>

        </div>
    </div>
    </div>
  )
}
