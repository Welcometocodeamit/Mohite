import React from 'react'

export default function Card(props) {
  return (<>
                
            <div id='card'>
            <div id='cardno'>
                    <h4 id='cardnotext'>{props.no}<sup>{props.sup}</sup></h4>
                </div>
              
                <div id='cardcontent'>
                    <h3>{props.title}</h3>
                    <h5>{props.info}</h5>

                    <div>
                        <div id='cardcontentrightdiv'>
                            <h4>Due date</h4>
                            <p>{props.due}</p>

                        </div>
                        <div id='cardcontentleftdiv'>
                            <h4>Penalty fees</h4>
                            <p><b>{props.amt1}</b> {props.amtc1}</p>
                            <p><b>{props.amt2}</b>{props.amtc2}</p>
                            
                        </div>
                    </div>

                </div>

            </div>

    </>
  )
}
