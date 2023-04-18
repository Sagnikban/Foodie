import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
       

        <div className="card" style={{"width": "18rem","maxHeight":"360px"}}>
          <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem Ipsum</p>
              <div className='container w-500 bg-success'>
              <select className="m-2 h-100 w-20 text-black rounded" style={{ select: "#0055FF"}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
              </div>
              
            </div>
        </div>
      </div>

    </div>
  )
}
