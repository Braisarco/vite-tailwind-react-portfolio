import { useState } from "react";
import Carousel from "react-multi-carousel";
import Playa from "./Playa";


function Forecast (){


    return(
        <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className="bg-gray-500 h-96 w-full p-16 my-20"
        containerClass="container"
        dotListClass=""
        draggable={true}
        focusOnSelect={true}
        infinite={false}
        itemClass=""
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable={true}
        >
            <Playa/>
            <Playa/>
            <Playa/>
            <Playa/>
        </Carousel>
    )
}

export default Forecast;