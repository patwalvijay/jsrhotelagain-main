import React from 'react'

function Diamond() {
    return (
        <div >
            <div className=" container mx-auto px-4 md:py-10">
                <h1 className=' text-xl md:text-3xl text-center md:mb-10 py-5 md:py-0 w-[300px] lg:w-full px-4 ml-6 pt-10'>JSR INN is a giant conglomerate situated amidst the lush green  Himalayan foothills. It upholds all the luxury with a perfect blend of nature. </h1>
                <div className=" md:flex md:gap-2 image1 ">
                    <div className="left">
                    <h1 className=' text-3xl md:text-5xl mb-5'>At Diamond <br /> Luxury Hotels</h1>
                    <p className=' md:w-[711px]  text-[20px] text-justify mb-5'>We are hospitality pioneers based in Dehradun. We are a family owned and operated hotel that has been around for over two decades now.
                        <br />
                        <br />
                        We strive to provide unmatched service to our guests while delivering value for money. We want our customers to feel at home while they are away from home, so we make sure that every detail is taken care of. This has helped us become one of the best hotels in Dehradun today.
                        <br />
                        <br />
                        Our team consists of highly skilled professionals who work towards giving you the best service possible so that you can enjoy your stay with us to the fullest. We make sure you have everything you need at our hotel, whether it's for business or vacation.
                    </p>
                </div>
                <div className="right md:flex md:gap-2">
                    <div className="right__left__img">
                        <img className=' w-full md:w-[260px]' src="img/d1.png" alt="" />
                    </div>
                    <div className="right__right__img">
                        <img  className=' w-full md:w-[270px]'src="img/d2.png" alt="" />
                    </div>
                </div>  
                </div>

                <div className="image2">
                    <img src="img/dm2.png" alt="" />
                </div>
              
            </div>
        </div>
    )
}

export default Diamond