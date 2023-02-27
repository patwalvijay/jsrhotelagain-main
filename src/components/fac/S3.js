import React from 'react'
import Slider from "react-slick";

const colors = [
    {
        url: "fac2/sp1.png",
    },
    {
        url: "fac2/sp2.png",
    },
    {
        url: "fac2/sp3.png",
    }
]
const delay = 2500;
function S3() {
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
        </div>

    )
}

export default S3