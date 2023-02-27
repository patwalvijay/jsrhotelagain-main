import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from "react-slick";

function OurRooms() {
    const [count, setcount] = useState(<C1 />);
    const next1 = () => {
        setcount(<C2 />)
    }

    const prev1 = () => {
        setcount(<C1 />)
    }
    // const allcomp = [<M_C3 />, <M_C4 />]
    // const comp = [<M_C2 />]


  
    return (
        <div className="bg-[#ECE3E1] p-5 md:mt-20">
            <div className=' container mx-auto px-4 md:py-10'>
                <div className=" image1">
                    {count}
                    <div className="icon float-right flex gap-3">

                        <button onClick={prev1}>
                            <div className="left__icon border-[1px] border-black rounded-full p-3 ">
                                <AiOutlineArrowLeft />

                            </div>
                        </button>

                        <button onClick={next1}>
                            <div className="right__icon bg-[#15423F] border rounded-full p-3 ">
                                <AiOutlineArrowRight color='white' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="image2 p-2">
                <h1 className='text-4xl mb-3'>Our Rooms</h1>
                   <Mslide/>
                    
                </div>
            </div>
        </div>

    )
}


function C1() {
    return (
        <div>
            <div className="c1">
                <h1 className='text-4xl mb-3'>Our Rooms</h1>
                <p className=' text-[20px] md:w-[621px] mb-3'>The hotel has three types of rooms: Deluxe, Standard and Budget room. The rooms are well-maintained and spacious with an attached bathroom, hot water supply, AC, TV set and other amenities.</p>
                <div className="img md:flex md:gap-10 mb-5 ">
                    <div className="left__img">
                        <img className='mb-3' src="img/r1.png" alt="" />
                        <h1 className='text-2xl mb-2'>STANDARD ROOM</h1>
                        <p className='text-[20px] mb-2'>Experience comfort at its best with the standard room at JSR Inn. Take advantage of excellent facilities and contentment.</p>
                        <div className="price md:flex justify-between">
                            <div className="1">
                                <h1 className='mb-2'>European <br /> Plan</h1>
                                <p>3,000/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="2">
                                <h1 className='mb-2'>Continental <br /> Plan</h1>
                                <p>4,000/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="3">
                                <h1 className='mb-2'>Modified American <br /> Plan</h1>
                                <p>5,000/-</p>

                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="4">
                                <h1 className='mb-2'>American <br /> Plan</h1>
                                <p>6,000/-</p>
                            </div>
                        </div>
                    </div>
                    <div className="right__img">
                        <img className='mb-3' src="img/r2.png" alt="" />
                        <h1 className='text-2xl mb-2'>STANDARD ROOM</h1>
                        <p className='text-[20px] mb-2'>Experience comfort at its best with the standard room at JSR Inn. Take advantage of excellent facilities and contentment.</p>
                        <div className="price md:flex justify-between">
                            <div className="1">
                                <h1 className='mb-2'>European <br /> Plan</h1>
                                <p>3,000/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="2">
                                <h1 className='mb-2'>Continental <br /> Plan</h1>
                                <p>4,000/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="3">
                                <h1 className='mb-2'>Modified American <br /> Plan</h1>
                                <p>5,000/-</p>

                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="4">
                                <h1 className='mb-2'>American <br /> Plan</h1>
                                <p>6,000/-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function C2() {
    return (
        <div>
            <div className="c1">
                <h1 className='text-4xl mb-3'>Our Rooms</h1>
                <p className=' text-[20px] md:w-[621px] mb-3'>The hotel has three types of rooms: Deluxe, Standard and Budget room. The rooms are well-maintained and spacious with an attached bathroom, hot water supply, AC, TV set and other amenities.</p>
                <div className="img md:flex md:gap-10 mb-5 ">
                    <div className="left__img">
                        <img className='mb-3' src="img/r3.png" alt="" />
                        <h1 className='text-2xl mb-2'>HERITAGE ROOM</h1>
                        <p className='text-[20px] mb-2'>Keeping close and appreciating our culture and rich heritage is something everyone wants. That's why we provide the Heritage Room. It is a spacious, well-furnished room with king-sized beds and everything you need to feel at home.</p>
                        <div className="price md:flex justify-between">
                            <div className="1">
                                <h1 className='mb-2'>European <br /> Plan</h1>
                                <p>4,000/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="2">
                                <h1 className='mb-2'>Continental <br /> Plan</h1>
                                <p>5,000/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="3">
                                <h1 className='mb-2'>Modified American <br /> Plan</h1>
                                <p>6,000/-</p>

                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="4">
                                <h1 className='mb-2'>American <br /> Plan</h1>
                                <p>7,000/-</p>
                            </div>
                        </div>
                    </div>
                    <div className="right__img">
                        <img className='mb-3' src="img/r4.png" alt="" />
                        <h1 className='text-2xl mb-2'>PREMIUM HERITAGE ROOM</h1>
                        <p className='text-[20px] mb-2'>The Premium Heritage Room is perfect for a splendid experience. This room has rich and creative hues, air conditioning, a flat-screen TV with satellite channels, a kettle, a desk, a double bed, and fast WiFi.</p>
                        <div className="price md:flex justify-between">
                            <div className="1">
                                <h1 className='mb-2'>European <br /> Plan</h1>
                                <p>4,500/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="2">
                                <h1 className='mb-2'>Continental <br /> Plan</h1>
                                <p>5,500/-</p>
                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="3">
                                <h1 className='mb-2'>Modified American <br /> Plan</h1>
                                <p>6,500/-</p>

                            </div>
                            <span className=' border border-l-1 border-black'></span>
                            <div className="4">
                                <h1 className='mb-2'>American <br /> Plan</h1>
                                <p>7,500/-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



function M_C1() {
    return (
        <div>
            <div className="card  mx-2">
                <div className="img ">
                    <img className=' mb-5' src="img/image 149.png" alt="" />
                </div>
                <h1 className='text-[20px] mb-2'>STANDARD ROOM</h1>
                <p className='text-[13px]'>Experience comfort at its best with the standard room at JSR Inn. Take advantage of excellent facilities and contentment.</p>
                <p><b>European Plan :</b> 3,000/-</p>
                <p><b>Continental Plan :</b> 4,000/-</p>
                <p><b>Modified American Plan:</b> 5,000/-</p>
                <p><b>American Plan:</b> 6,000/-</p>
            </div>
        </div>
    )
}
function M_C2() {
    return (
        <div>
            <div className="card  mx-2">
                <div className="img ">
                    <img className=' mb-5' src="img/image 146.png" alt="" />
                </div>
                <h1 className='text-[20px] mb-2'>SUITE ROOM</h1>
                <p className='text-[13px]'>Our suite is the way to go if you want the luxury of your own home. Suites offer all the comforts of home and more, including a sitting area and kitchenette.</p>
                <p><b>European Plan :</b> 5,000/-</p>
                <p><b>Continental Plan :</b> 6,500/-</p>
                <p><b>Modified American Plan:</b> 7,500/-</p>
                <p><b>American Plan:</b> 8,500/-</p>
            </div>
        </div>
    )
}

function M_C3() {
    return (
        <div>
            <div className="card  mx-2">
                <div className="img ">
                    <img className=' mb-5' src="img/image 147.png" alt="" />
                </div>
                <h1 className='text-[20px] mb-2'>HERITAGE ROOM</h1>
                <p className='text-[13px]'>Keeping close and appreciating our culture and rich heritage is something everyone wants. That's why we provide the Heritage Room.</p>
                <p><b>European Plan :</b> 4,000/-</p>
                <p><b>Continental Plan :</b> 5,000/-</p>
                <p><b>Modified American Plan:</b> 6,000/-</p>
                <p><b>American Plan:</b> 7,000/-</p>
            </div>
        </div>
    )
}

function M_C4() {
    return (
        <div>
            <div className="card  mx-2">
                <div className="img ">
                    <img className=' mb-5' src="img/image 148.png" alt="" />
                </div>
                <h1 className='text-[20px] mb-2'>PREMIUM HERITAGE ROOM</h1>
                <p className='text-[13px]'>The Premium Heritage Room is perfect for a splendid experience. This room has rich and creative hues, air conditioning, TV, a double bed, and fast WiFi etc.</p>
                <p><b>European Plan :</b> 4,500/-</p>
                <p><b>Continental Plan :</b> 5,500/-</p>
                <p><b>Modified American Plan:</b> 5,000/-</p>
                <p><b>American Plan:</b> 7,500/-</p>
            </div>
        </div>
    )
}



function Mslide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
         <Slider {...settings}>
            <div>
              <M_C1/>
            </div>
            <div>
            <M_C2/>
            </div>
            <div>
            <M_C3/>
            </div>
            <div>
            <M_C4/>
            </div>
           
          </Slider>
    </div>
  )
}



// class Slider   {
//   render() {
    
//     return (
//       <div>
        // <Slider {...settings}>
        //     <div>
        //       <M_C1/>
        //     </div>
        //     <div>
        //     <M_C2/>
        //     </div>
        //     <div>
        //     <M_C3/>
        //     </div>
        //     <div>
        //     <M_C4/>
        //     </div>
           
        //   </Slider>
//       </div>
//     )
//   }
// }




export default OurRooms