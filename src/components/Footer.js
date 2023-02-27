import React from 'react'
import S1 from './fac/S1'

function Footer() {
  return (
    <div className=' bg-[#15423F] p-5'>
        <div className="  mx-auto px-5">
           <div className="md:flex md:justify-around md:align-middle md:items-center">
           <div className="log">
                <img src="img/logo3.png" alt="" />
            </div>
            <div className="mid">
                <h1 className='text-[36px] text-white text-center mb-2'>Are you ready to stay at JSR INN ?</h1>
            </div>
            <div className="right text-center">
                <p className='text-[20px] text-white'>Phone: +91- 70555 01092</p>
                <br />
                <p className='text-[20px] text-white'>Address: Near Bizapur Dam <br /> Galjwari, Garhi Cantt, Dehradun, <br /> Uttarakhand 248141</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer