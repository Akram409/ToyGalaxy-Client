import banner from "/public/banner.jpg";
const Banner = () => {
  return (
    <div className="">
      <div className="w-full  ">
        <div className="w-full relative">
          <img src={banner} className="w-full object-fill h-[89vh]" />
          <div className="absolute flex items-center h-full gap-5 left-16 top-3">
            <div className="space-y-7 pl-12 w-1/2">
              <h1 className="text-5xl font-bold text-white ">
                IT'S TIME <br />
                <span className="text-7xl text-yellow-500">TO PLAY!</span>
              </h1>
              <div>
                <button className="btn btn-active btn-accent w-3/4 text-white text-2xl hover:btn-secondary hover:text-black">
                  Explore Now!
                </button>
              </div>
              <p className="text-white font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
