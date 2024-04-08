import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { certificatesData } from '@/constants/data/certificate';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 	960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const Card = (props) => (
    <div className="cert_card">
      <div className="thumb">
        <a aria-label="" href=""><img src={props.img} alt="" className="blog__img" /></a>
      </div>
      <div className="details">
        <h3 className="title">{props.title}</h3>
        <div className="meta">
          <span>@Coursera</span>
          <a className='credential' href=''><i className="bx bx-link"></i>Credential</a>
        </div>
      </div>
    </div>
  )
  
const Certificates = ({certificates}) => {
  return (
    <div className="p-6">
        <Slider {...settings}>
          {certificates.map((certificate,index) => (
            <Image className='rounded-md' alt={certificate.name} width={1000} height={200} src={certificate.image} key={index} />
          ))}
        </Slider>
      </div>
  )
}

export default Certificates