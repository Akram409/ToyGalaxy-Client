import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">
          Feature Product
        </h1>
        <div className="container  mx-auto divider"></div>
      </div>
      <div className="flex-row lg:flex lg:justify-center lgz:items-center " data-aos="fade-up">
        <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
          <img
            src="https://i.ibb.co/5TJ9L7r/spiderman1.jpg"
            className="max-w-md max-h-[500px] rounded-lg shadow-2xl"
          />

          <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
            <p className="text-5xl font-bold">SPIDER MAN</p>
          </div>
        </div>
      </div>
      <div className="flex-row lg:flex lg:justify-evenly lg:items-center mt-5">
        <div data-aos="fade-up-right">
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
            <img
              src="https://i.ibb.co/w7sVJND/spider.jpg"
              className="max-w-md max-h-[500px] rounded-lg shadow-2xl"
            />

            <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
              <p className="text-5xl font-bold">SPIDER MAN</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
            <img
              src="https://i.ibb.co/Pgrgt4S/clf47wwin001nmh08aqvomr5k-1.jpg"
              className="max-w-md max-h-[500px] rounded-lg shadow-2xl"
            />

            <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
              <p className="text-5xl font-bold">HULK</p>
            </div>
          </div>
        </div>
        <div data-aos="lg:fade-up-left md:fade-up">
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
            <img
              src="https://i.ibb.co/K6yRk5p/transformer-1.jpg"
              className="max-h-[500px] rounded-lg shadow-2xl"
            />

            <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
              <p className="text-5xl font-bold">ROBOT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row lg:flex lg:justify-center lg:items-center mt-5" data-aos="flip-up">
        <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
          <img
            src="https://i.ibb.co/5TJ9L7r/spiderman1.jpg"
            className="max-w-md max-h-[500px] rounded-lg shadow-2xl"
          />

          <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
            <p className="text-5xl font-bold">SPIDER MAN</p>
          </div>
        </div>
      </div>
      <div className="flex-row lg:flex lg:justify-evenly lg:items-center mt-5">
        <div data-aos="zoom-in-right">
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
            <img
              src="https://i.ibb.co/w7sVJND/spider.jpg"
              className="max-w-md max-h-[500px] rounded-lg shadow-2xl"
            />

            <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
              <p className="text-5xl font-bold">SPIDER MAN</p>
            </div>
          </div>
        </div>
        <div data-aos="flip-down">
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
            <img
              src="https://i.ibb.co/Pgrgt4S/clf47wwin001nmh08aqvomr5k-1.jpg"
              className="max-w-md max-h-[500px] rounded-lg shadow-2xl"
            />

            <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
              <p className="text-5xl font-bold">HULK</p>
            </div>
          </div>
        </div>
        <div data-aos="lg:zoom-in-left md:zoom-in">
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
            <img
              src="https://i.ibb.co/K6yRk5p/transformer-1.jpg"
              className="max-h-[500px] rounded-lg shadow-2xl"
            />

            <div className="bg-black px-6 py-[40%] bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
              <p className="text-5xl font-bold">ROBOT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AosSection;
