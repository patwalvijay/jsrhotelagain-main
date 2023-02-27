import React from 'react'
import Slider from "react-slick";

const colors = [
    {
        url: "fac2/rr1.png",
    },
    {
        url: "fac2/rr2.png",
    },
    {
        url: "fac2/rr3.png",
    }
]
const delay = 2500;
function S1() {
    const [index, setIndex] = React.useState(0);
    const [color, setcolor] = React.useState([]);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }



    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className="">
            <div className=' container mx-auto mt-[8px]  md:-mt-0'>
              
                <div className=' image2 '>
                    <div className="slideshow ">
                        <div
                            className="slideshowSlider"
                            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                        >
                            {colors.map((data, index) => (
                                <div
                                    className="slide"
                                    key={index}
                                // style={{ backgroundColor }}
                                >
                                    {/* {console.log(colors)} */}
                                    <img src={data.url} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-row gap-2  mt-20 snap-start scrollbar-hide overflow-x-scroll justify-evenly  	">
      <img className="w-[400px] p-4 bg-white" src="https://www.myphotogenie.in/horizontal%20bride/hbc2.jpg" />
      <img className="w-[400px] p-4 bg-white" src="https://www.myphotogenie.in/horizontal%20bride/hbc3.jpg" />
      <img className="w-[400px] p-4 bg-white" src="https://www.myphotogenie.in/horizontal%20weddingshot/hwc1.jpg" />
      <img className="w-[400px] p-4 bg-white" src="https://www.myphotogenie.in/horizontal%20bride/hbc3.jpg" />
      <img className="w-[400px] p-4 bg-white" src="https://www.myphotogenie.in/horizontal%20weddingshot/hwc1.jpg" />
      
      </div>


        </div>

    )
}





export default S1