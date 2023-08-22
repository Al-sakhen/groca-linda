import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import slider1 from "/carousel/slider-1.jpg";
import slider2 from "/carousel/slider-2.jpg";
import slider3 from "/carousel/slider-3.jpg";
const Carousel = () => {
    const splideOptions = {
        type: "loop",
        pagination: false,
        breakpoints: {
            // 640: {
            //     height : "500px"
            // },
        },
    };
    return (
        <>
            <Splide options={splideOptions} aria-label="My Favorite Images">
                <SplideSlide>
                    <img src={slider1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={slider2} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={slider3} alt="Image 2" />
                </SplideSlide>
            </Splide>
        </>
    );
};

export default Carousel;
