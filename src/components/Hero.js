import Marquee from "react-fast-marquee";
import quarter from "../assets/quarter.png";
import dots from "../assets/dots.png";
import bar from "../assets/bar.png";
import graph from "../assets/graph.png";
import chart from "../assets/chart.png";
import message from "../assets/message.png";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <img src={quarter} alt="" className="absolute top-[-150px] right-0" />

      <section className="w-full bg-main text-[white] py-8">
        <div className="mb-[80px]">
          <Header />
          <div className=" lg:flex w-[90%] md:w-[80%] h-[60%] mx-auto mb-4 mt-8 justify-between z-10 relative">
            <div className="w-full lg:w-[40%] h-[100%] pt-8 text-center lg:text-left">
              <h1 className="text-4xl text-center lg:text-left md:text-5xl leading-[56px] lg:leading-[72px] mb-4">
                Save time by building <br />
                fast with Boldo Template
              </h1>
              <p className="leading-7  text-center lg:text-left text-sm md:text-base mb-6">
                Funding handshake buyer business-to-business metrics iPad
                partnership.
                First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <button className="mr-4 mb-4 bg-green text-[black] font-bold py-2 px-10">
                Buy template
              </button>
              <button className="ml-2 bg-[inherit] font-bold py-2 px-10 border-[2px] border-[white]">
                Explore
              </button>
            </div>
            <div className="hidden lg:block w-full mt-20 lg:mt-0 lg:w-[38%] h-[100%]">
              <div className="w-full bg-[white] bg-opacity-10 p-4 rounded-[15px] mb-4">
                <img src={dots} alt="" className="mb-6" />
                <img src={bar} alt="" className="w-[90%] h-[100px] mx-auto my-4" />
              </div>
              <div className="flex justify-between">
                <div className="w-[40%] bg-[white] bg-opacity-10 p-4 rounded-[15px]">
                  <img src={dots} alt="" className="mb-6" />
                  <img
                    src={graph}
                    alt=""
                    className="w-[90%] h-[70px] mx-auto my-4"
                  />
                </div>
                <div className="w-[50%] bg-[white] bg-opacity-10 p-4 rounded-[15px]">
                  <img src={dots} alt="" className="mb-6" />
                  <div className="flex justify-between items-center w-[90%] mx-auto my-4">
                    <img src={chart} alt="" className="h-[70px]" />
                    <img src={message} alt="" className="h-[]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block logo-div mt-[150px] lg:mt-[60px] flex justify-between items-center h-[20px] w-[80%] mx-auto">
          <Marquee
            gradient={false}
            speed={80}
            gradientWidth={30}
            gradientColor={[166, 166, 166]}
          >
            <div className="logo-div  flex justify-between h-[20px] w-[100%] mx-auto">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Hero;
