import bluelogo from "../assets/bluelogo.png"

const Footer = () => {
    return (
        <footer className="w-full text-center lg:text-left">
        <div className="lg:grid grid-cols-5 gap-4 mx-auto w-[90%] lg:w-[80%] mt-20 mb-8">
          <div className="col-span-2 mb-8 lg:mb-0 lg:pr-56">
            <img src={bluelogo} alt="" className="mb-6 h-10" />
            <p className="text-base text-gray my-4">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
            <p className="text-base text-gray mt-10">All rights reserved.</p>
          </div>
          <div className="col-span-3 grid grid-cols-3 lg:pl-4">
            <div>
              <h3 className="text-xl font-bold mb-6">Landings</h3>
              <a href="/" className="block mb-4 text-xl text-gray">Home</a>
              <a href="/" className="block mb-4 text-xl text-gray">Products</a>
              <a href="/" className="block mb-4 text-xl text-gray">Sevices</a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <a href="/" className="block mb-4 text-xl text-gray">Home</a>
              <a href="/" className="block mb-4 text-xl text-gray">Careers <span className="py-1 px-4 font-bold ml-2 rounded-[24px] bg-green cursor-pointer text-[black] text-sm">Hiring!</span></a>
              <a href="/" className="block mb-4 text-xl text-gray">Sevices</a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <a href="/" className="block mb-4 text-xl text-gray">Home</a>
              <a href="/" className="block mb-4 text-xl text-gray">Products</a>
              <a href="/" className="block mb-4 text-xl text-gray">Sevices</a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;