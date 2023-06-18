import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = ({ props }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="flex justify-center"> 
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType="desktop"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {props.map((item, index) => (
        <div key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.image}
              alt={`carousel-${index}`}
              style={{ width: "85%", height: "auto" }}
            />
          </a>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default MyCarousel;
