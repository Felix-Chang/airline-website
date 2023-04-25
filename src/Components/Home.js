import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import selfie from "../Images/pilot-selfie.jpeg";
import hurricane from "../Images/hurricane.jpeg";
import "../Styles/Home.css";
import BookingForm from "./BookingForm";

const Home = () => {
  return (
    // <div>
    //     <Carousel className="carousel">
    //         <Carousel.Item interval={100}>
    //             <img src={selfie} alt="First slide" />
    //             <Carousel.Caption>
    //                 <p>Un vol typique vers l'Absurdistan</p>
    //             </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item interval={100}>
    //             <img src={hurricane} alt="Second slide" />
    //             <Carousel.Caption>
    //                 <p>Une belle journée sur la côte d'Absurdistan</p>
    //             </Carousel.Caption>
    //         </Carousel.Item>
    //         <Carousel.Item>
    //             <img
    //                 className="d-block w-100"
    //                 src="holder.js/800x400?text=Third slide&bg=20232a"
    //                 alt="Third slide"
    //             />
    //             <Carousel.Caption>
    //                 <h3>Third slide label</h3>
    //                 <p>
    //                     Praesent commodo cursus magna, vel scelerisque nisl
    //                     consectetur.
    //                 </p>
    //             </Carousel.Caption>
    //         </Carousel.Item>
    //     </Carousel>
    // </div>
    <div className="carousel-container">
      <Carousel infiniteLoop autoPlay interval={3000}>
        <div>
          <img src={selfie} />
          <p className="legend">Un vol typique vers l'Absurdistan</p>
        </div>
        <div>
          <img src={hurricane} />
          <p className="legend">Une belle journée sur la côte d'Absurdistan</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <BookingForm/>
    </div>
  );
};

export default Home;
