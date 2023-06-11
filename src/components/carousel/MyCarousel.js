import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from '../../logo.svg';
import logo2 from '../../home.png';
import shot from '../../Screenshot.png'
import shot2 from '../../Screenshot2.png'

const MyCarousel = () => {
  const images = [
    logo,
    logo2,
    shot,
    shot2,
    //... add more image URLs
  ];

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
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel 
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
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
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`carousel-${index}`} style={{width: '80%', height: 'auto'}} />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
