import arrowdown from "../assets/arrowdown.png"
import people from "../assets/people.png"

const Info = () => {
    return (
        <section className="mb-8 mt-20 w-[90%] lg:w-[80%] mx-auto">
  <img src={people} alt className="w-full h-[350px] rounded-[24px]" />
  <div className="lg:flex justify-between mt-6 w-full">
    <div className="w-full lg:w-[45%] text-xl">
      <h2 className="text-3xl leading-[56px]">
        We connect our customers with the best, and help them keep up-and
        stay open.
      </h2>
    </div>
    <div className="w-full lg:w-[45%] mt-8 lg:mt-0 text-xl">
      <div className="flex justify-between items-center w-full py-4 mb-4 border-b-[1px] border-gray">
        <p>We connect our customers with the best?</p>
        <div className="h-6 w-6 rounded-full bg-main flex justify-center items-center">
          <img src={arrowdown} alt className="h-2" />
        </div>
      </div>
      <div className="flex justify-between items-center w-full py-4 mb-4 border-b-[1px] border-gray">
        <p>Android research &amp; development rockstar?</p>
        <div className="h-6 w-6 rounded-full bg-main flex justify-center items-center">
          <img src={arrowdown} alt className="h-2" />
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Info;