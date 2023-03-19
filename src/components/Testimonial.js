import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import arrowright from "../assets/arrowright.png";
import arrowleft from "../assets/arrowleft.png";
import { testimonialData } from "../mockData/data";


const Testimonial = () => {
  const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const slideRef = useRef(null)


  return (
    <section className="w-full py-8 bg-main text-[white] mt-20">
      <div className="mb-8 mt-20 flex justify-between w-[80%] mx-auto">
        <h1 className="text-center lg:text-left text-3xl w-[100%] lg:w-[60%] lg:text-4xl leading-[40px] lg:leading-[72px] mb-30">
          An enterprise template to ramp up your company website
        </h1>
      </div>
      <div className="mb-5 mt-20 flex justify-between w-[80%] mx-auto">
      <div className="w-[100%] lg:w-[60%]"></div>
        <div className="flex self-end">
          <div onClick={() => slideRef.current.goBack()} className="mr-6 h-16 w-16 rounded-full flex items-center justify-center bg-[white]">
            <img src={arrowleft} alt="" className="h-6 w-6" />
          </div>
          <div onClick={() => slideRef.current.goNext()} className="h-16 w-16 rounded-full flex items-center justify-center bg-[white]">
            <img src={arrowright} alt="" className="h-6 w-6" />
          </div>
        </div>
      </div>
    
      <div className="mb-8 mt-5 w-[100%] lg:w-[80%] mx-auto">
        {/* <div className="grid grid-cols-3 gap-4 text-[black]"> */}
          <Slide slidesToScroll={1} slidesToShow={1} indicators={false} responsive={responsiveSettings} ref={slideRef}>
      
            {testimonialData?.map((data) => (
              <div className="text-[black] mr-5 ml-5">
              <div
                className="bg-[white] py-8 pl-8 pr-16 rounded-2xl"
                key={data.id}
              >
                <p className="text-2xl leading-8">{data.testimonial}</p>
                <div className="flex items-center mt-6 text-main">
                  <img
                    src={data?.image}
                    alt={data?.alt}
                    className="h-16 w-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-base font-bold">{data.name}</p>
                    <p className="text-sm">{data?.position}</p>
                  </div>
                </div>
              </div>
              </div>
            ))}
    
           
          </Slide>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
