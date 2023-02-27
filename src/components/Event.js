import React from 'react'

function Event() {
    return (
        <div className=' container mx-auto px-4 md:py-20'>
            <div className="pt-14">
                <h1 className='text-[38px] md:text-[64px] text-center mb-2'>The best <span className='text-[#15423F]'>event</span>  </h1>
                <h1 className='text-[38px] text-[#15423F] md:text-[64px] text-center mb-2 -mt-6'>venue <span className='text-black -mt-20'>just for you!</span> </h1>

                <p className='text-[16px] md:text-[24px] text-center mb-5'>JSR INN owns a luxurious banquet hall that can accommodate more than 2,000 people. It is equipped with all the modern facilities, needed to host business meetings, seminars, weddings, and more.</p>
                <div className="image1">
                    <div className="img md:flex md:gap-2 ">
                        <div className="left">
                            <img src="img/e1.png" alt="" />
                        </div>
                        <div className="right">
                            <img src="img/e2.png" alt="" />
                        </div>
                    </div>
                    <div className="img md:flex md:gap-2 md:py-2">
                        <div className="left">
                            <img src="img/e3.png" alt="" />
                        </div>
                        <div className="mid">
                            <img src="img/e4.png" alt="" />
                        </div>
                        <div className="right">
                            <img src="img/e5.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="image2 container mx-auto px-5">
                    <img className=' my-2' src="event/e1.png" alt="" />
                    <img className='rounded-xl my-2' src="event/e2.png" alt="" />
                    <img className=' my-2' src="event/e3.png" alt="" />
                    <img className=' my-2' src="event/e4.png" alt="" />
                    <img className=' my-2' src="event/e5.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Event