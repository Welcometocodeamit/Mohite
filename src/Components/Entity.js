import React from 'react'
import star from '../Assets/star-fill.svg'
import calender from '../Assets/calender.svg'
import group from '../Assets/Group.svg'
import eimg from '../Assets/entityimg.png'
import ServiceCard from './ServiceCard'

export default function Entity(props) {
  return (
    <>
        <div id='entity'>
            <div id='rightentity'>
                <h3>{props.name}</h3>
                <p>{props.intro}</p>

                <div id='star'>
                    <img src={star} alt='star' width={'24px'} height={'24px'} style={{paddingTop:'12px'}}/>&nbsp;&nbsp;
                    <p><span id='starrate'>{props.rating}</span> ({props.reviewcount})</p>
                </div>

                <div id='task'>
                    <div id='taskheading'>
                        <p>{props.taskComplexity}</p>
                        <p><b>{props.price}</b></p>
                    </div>

                    <div id='taskmidline'>
                        <img src={calender} height={'24px'} width={'24px'} style={{paddingTop:'14px'}}/>
                        <p>Delivers the job within 2 days</p>
                    </div>

                    <div id='taskbtn'>
                        <button id='taskreqbtn'>Request Proposal</button>
                        <button id='taskchatbtn'>Chat With Me</button>

                    </div>
                </div>

                <div id='wps'>
                    <h2>What people say?</h2>
                    <p>{props.testimony}</p>
                    <center><img src={group} width={'86px'} height={'10px'}style={{paddingTop:'50px'}}/></center>

                </div>

            </div>

            <div id='leftentity'>
                <div id='eimgdiv'>
                    <img src={props.image} alt='eimg' style={{borderRadius:'20px', height:'412px'}}/>
                </div>
                <h3 id='aboutentity'>About {props.name}</h3>

                <div id='aboutinfo'>
                    <div>
                        <h5>FROM</h5>
                        <p>{props.from}</p>
                    </div>
                    <div>
                        <h5>PARTNER SINCE</h5>
                        <p>{props.partnerSince}</p>
                    </div>
                    <div>
                        <h5>AVERAGE RESPONSE TIME</h5>
                        <p>{props.averageResponseTime}</p>
                    </div>
                </div>

                <div id='aboutinfoabout'>
                    <h4>ABOUT</h4>
                    <p>{props.description}</p>
                </div>

                <div id='entityservices'>
                    <div id='esright'>
                        <h3>SERVICES I OFFER</h3>
                        <ul>
                            {props.services?.map((element)=>{
                                return(<li>{element}</li>)
                            })}
                        </ul>

                    </div>

                    <div id='esleft'>
                        <h3>WHY ME?</h3>
                        <ul>
                     
                        </ul>


                    </div>
                </div>
            </div> 
        </div>

        <div id='servicecardsmain'>
            <h3>Recommended for you</h3>
            <div id='servicecards'>
                <ServiceCard name='Michael Jackson' price='₹4,370' star='4.8' rating='89'/>
                <ServiceCard name='Stevie Wonder' price='₹4,263' star='5.0' rating='62'/>
                <ServiceCard name='Ray Charles' price='₹2,586' star='4.3' rating='189'/>
            </div>
        </div>
    </>
  )
}
