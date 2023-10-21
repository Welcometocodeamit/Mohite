import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbarmain'>
            <div >
                <ul style={{listStyle:'none'}} className='rightnav'>
                    <li>Logoipsum</li>
                    <li>Solutions</li>
                    <li>Features</li>
                    <li>Blogs</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='leftnav'>
                <button id='loginbtn'>Login</button>
                <button id='registerbtn'>Register</button>
            </div>
        </nav>
    
  )
}
