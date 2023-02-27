import React from 'react'
import Slider from "react-slick";

function Client() {
 
  return (
    <div className=' container mx-auto px-4 py-10'>
        <h1 className=' text-center text-[36px] text-[#15423F]'>What Our Clients Say About Us</h1>
        <div className="image1">
                  <img src="img/client.png" alt="" />
        </div>
        <div className="image2">
          <Cslide/>
        </div>
    </div>
  )
}

const colors = [
  {
      url: "client/Testimonial 1 - mobile.png",
  },
  {
      url: "client/Testimonial 2- mobile.png",
  },
  {
      url: "client/Testimonial 3 - mobile.png",
  }
]
const delay = 2500;

function Cslide() {


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
    <div  >
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
  )
}

export default Client