import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
      <div className="row justify-content-center">
        <div className='col-auto'>
          <h4 style={{padding: "0", margin: "2px"}}>Books Fair</h4>
        </div>
        </div>
        <div className="row justify-content-center">
        <div className='col-auto'>
          <p>Copyright&#169;2022</p>
        </div>
      </div> 
      </div>
    </div>
  )
}
