import { serviceData } from "../mockData/data";
import arrowright from "../assets/arrowright.png";
import man from "../assets/man.png";
import check from "../assets/check.png";
import graph2 from "../assets/graph2.png";
import chart from "../assets/chart.png"
import eye from "../assets/eye.png"
import star from "../assets/star.png"
import sun from "../assets/sun.png"
import woman from "../assets/woman.png"
import blue from "../assets/blue.png"
import green from "../assets/green.png"
import gray from "../assets/gray.png"

const Services = () => {
  return (
    <section className="w-full py-8">
      <p className="text-center text-gray text-xl mt-8 mb-4">Our Sevices</p>
      <h1 className="text-center text-3xl lg:text-4xl leading-[50px] lg:leading-[70px] w-[80%] lg:w-[50%] mx-auto">
        Handshake infographic mass market crowdfunding iteration.
      </h1>
      <div className="mb-8 mt-10 md:flex justify-between w-[90%] lg:w-[80%] mx-auto">
        {serviceData.map((data) => (
          <div className="w-full mb-16 md:w-[25%]" key={data?.id}>
            <img
              src={data?.image}
              alt={data?.alt}
              className="rounded-[15px] w-full h-[354px]"
            />
            <p className="text-2xl my-4">{data?.title}</p>
            <p className="text-xl text-gray mb-2">{data?.desc}</p>
            <div className="flex justify-between items-center w-[150px] border-b-[2px] border-gray py-2">
              <a href="/" className="font-bold mr-2">
                Explore page
              </a>
              <img src={arrowright} alt="" className="w-6" />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 mt-40 lg:flex justify-between w-[90%] lg:w-[80%] mx-auto">
        <div className="w-full lg:w-[40%] rounded-[15px] relative mb-4 text-main">
          <img src={man} alt="" className="h-full w-full" />
          <div className="p-4 shadow-lg bg-[white] rounded-[12px] absolute right-[55px] bottom-[-16%]">
            <img src={graph2} alt="graph2" className="mx-auto h-[200px]" />
            <h4 className="text-2xl font-bold my-4">30%</h4>
            <h5>More income in June</h5>
          </div>
        </div>
        <div className="w-full lg:w-[40%] mt-20 lg:mt-0 p-6">
          <h2 className="text-3xl leading-[56px] mb-4">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="text-xl leading-[32px]">
            <div className="flex items-center mb-4">
              <img src={check} alt="" className="mr-6 h-8 w-8" />
              <p>We connect our customers with the best</p>
            </div>
            <div className="flex items-center mb-4">
              <img src={check} alt="" className="mr-6 h-8 w-8" />
              <p>Advisor success customer launch party</p>
            </div>
            <div className="flex items-center mb-4">
              <img src={check} alt="" className="mr-6 h-8 w-8" />
              <p>Business-to-consumer long tail</p>
            </div>
          </ul>
          <button className="py-4 px-10 bg-main text-[white] font-bold mt-6">
            Start now
          </button>
        </div>
      </div>

      <div className="mb-8 lg:mt-40 lg:flex justify-between w-[90%] lg:w-[80%] mx-auto">
    <div className="w-full lg:w-[40%] p-6">
      <h2 className="text-3xl leading-[56px] mb-4">
        We connect our customers with the best, and help them keep up-and
        stay open.
      </h2>
      <div className="text-xl leading-[32px]">
        <div className="flex items-center mb-8 w-full shadow-lg rounded bg-main text-[white] p-2">
          <img src={star} alt="star" className="mr-6 h-6 w-6" />
          <p>We connect our customers with the best</p>
        </div>
        <div className="flex items-center mb-8 w-full shadow-lg rounded p-2">
          <img src={eye} alt="eye" className="mr-6 h-6 w-6" />
          <p>Advisor success customer launch party</p>
        </div>
        <div className="flex items-center mb-8 w-full shadow-lg rounded p-2">
          <img src={sun} alt="sun" className="mr-6 h-6 w-6" />
          <p>Business-to-consumer long tail</p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-[40%] rounded-[15px] relative mb-4 text-main">
      <img src={woman} alt="woman" className="h-[450px] w-full" />
      <div className="py-4 px-10 shadow-lg bg-[white] rounded-[12px] absolute left-[55px] bottom-[-12%]">
        <img src={chart} alt="chart" className="mx-auto my-4 h-40 w-40" />
        <div className="flex items-center mb-4">
          <img src={blue} alt="blue" className="mr-2" />
          <p>35% - Agile Development</p>
        </div>
        <div className="flex items-center mb-4">
          <img src={green} alt="green" className="mr-2" />
          <p>30% - Investor bandwidth</p>
        </div>
        <div className="flex items-center mb-4">
          <img src={gray} alt="gray" className="mr-2" />
          <p>35% - A/B testing</p>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};

export default Services;
