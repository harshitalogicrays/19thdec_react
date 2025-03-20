import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from '/src/assets/a.avif'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const ImageSlider = () => {
  const images = [
    {url:"https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=1444%2Cq=85%2Cw=2000/wp-content/uploads/carousel-day.jpg", text:"image1"},
    {url:"https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/lands-endslide__800x600.jpg", text:"image2"},
    {url:" https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg2.jpg", text:"image3"},
    {url:"https://dequeuniversity.com/assets/js/patterns/images/tempimage02.jpeg", text:"image4"},
    {url:image1, text:"image4"},
  ]

  const CustomPrevArrow = ({onClick})=>(
    <button className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-80 " onClick={onClick}><FaChevronCircleLeft size={24}/></button>
  )

  const CustomNextArrow = ({onClick})=>(
    <button className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-80 " onClick={onClick}><FaChevronCircleRight size={24}/></button>
  )

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    pauseOnHover:false,
    autoplaySpeed:2000,
    prevArrow:<CustomPrevArrow/>,
    nextArrow:<CustomNextArrow/>  
  };


  return (
   <>
    <Slider {...settings}>
      {images.map((image,index)=>  <div key={index} >
       <img src={image.url} alt={image.text} className='h-80 w-full'/>
      </div>)}
    
    </Slider>
   </>
  )
}

export default ImageSlider
