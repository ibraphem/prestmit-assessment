import cut from "../assets/cut.png"

const Contact = () => {
    return (
        <section className="w-full mb-30">
  <div className="mt-20 bg-main text-[white] rounded-2xl px-4 py-16 relative w-[90%] lg:w-[80%] mx-auto">
    <img src={cut} alt="" className="absolute right-0 top-0" />
    <h1 className="text-center text-3xl lg:text-4xl leading-[56px] lg:leading-[72px] w-[80%] lg:[w-60%] mx-auto mb-4 relative">
      An enterprise template to ramp up your company website
    </h1>
    <div className="lg:flex justify-center items-center">
      <div className="rounded-[24px] w-full lg:w-[300px] py-2 h-[50px] flex items-center px-8 bg-[white] text-[black] mb-4 lg:mb-0 mr-4">
        <input type="email" placeholder="Your email address" className="border-0 outline-0 w-full" />
      </div>
      <button className="block mx-auto lg:mx-0 lg:inline text-[black] bg-green py-2 px-10 font-bold h-[50px]">Start now</button>
    </div>
  </div>
 </section> 
    );
};

export default Contact;