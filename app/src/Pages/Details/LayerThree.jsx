import { useEffect } from "react";
import i1 from "../../assets/images/layer3/1.webp"
import i2 from "../../assets/images/layer3/2.webp"
import { useState } from "react";


const LayerThree = () => {
    let images = [i1, i2]

    let carouselTexts = ["Two groundbreaking solutions unveiled to boost your ROI", "GFI Optima: AI-powered benchmarking tool"]



    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);



    return (
        <div className="layer3 row">
            <div className=" layer3-text col">
                <h2>Two groundbreaking solutions
                    unveiled to boost your ROI</h2>




             

                <div className="carousel">
                    {carouselTexts.map((text, index) => (
                        <h3 key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}  p1 `} > {text}</h3>
                    ))}


                </div>




                <button > Get A Demo <i className="fa-solid fa-forward fa-beat-fade " style={{ color: "#ffffff" }}></i>
                </button>
            </div>

            <div className="layer3-img col ">

                <div className="carousel">
                    {images.map((imageUrl, index) => (


                        <div key={index}>
                            <img
                                key={index}
                                src={imageUrl}
                                alt="carousel-slide"
                                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                            />




                        </div>

                    ))}




                </div>

            </div>
        </div>
    )
}

export default LayerThree
