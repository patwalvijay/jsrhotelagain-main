import React from 'react'

function Frams() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 md:py-32 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-[64px] text-[40px] text-black text-2xl font-medium text-center title-font  mb-10">JSR FARMS</h1>
                        <p className="text-base text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The Farmhouse is well-decorated with wooden furniture and has been built in such a way that it provides a private corner for couples to enjoy their moments together. The venue has been designed in such a way as to ensure privacy for every couple on their special day.</p>
                    </div>
                    <div className="img md:flex gap-3 ">
                        <div className="imgs1 w-[100%] h-[23em]">
                            <h1 className='  text-center py-40  text-3xl  my-5 text-white '>Lawn</h1>
                            {/* <img src="img/f31.png" alt="" /> */}
                        </div>
                        <div className="imgs2 w-[100%] h-[23em]">
                        <h1 className='   text-center py-40 text-3xl my-5  text-white '>Hall</h1>

                            {/* <img src="img/f32.png" alt="" /> */}
                        </div>
                        <div className="imgs3 w-[100%] h-[23em]">
                        <h1 className='  text-center py-40  text-3xl my-5  text-white '>Parking</h1>

                            {/* <img src="img/f33.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Frams