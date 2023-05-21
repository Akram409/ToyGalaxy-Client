import image from "/public/banner.jpg";
const About = () => {
  return (
    <div className="container mx-auto mt-28">
      <h1 className="text-5xl font-bold text-center my-5 text-[#00425A]">
        About Us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-2xl rounded-md">
        <div className="px-7 py-5">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Why ToyGalaxy?
          </h1>
          <p className="font-bold text-xl">
            At Our ToyGalaxy, we believe in providing a joyful and exciting
            shopping experience for both kids and parents. We understand the
            unique needs of children and offer a wide range of products that are
            fun, educational, and of the highest quality.
          </p> <br />
          <p className="font-bold text-xl">
            Our store is filled with a delightful assortment of toys, clothing,
            accessories, and more, all carefully selected to inspire creativity
          </p> <br />
          <p className="font-bold text-xl">
            With a dedicated team of knowledgeable staff, we strive to provide
            exceptional customer service, assisting you in finding the perfect
          </p>
        </div>
        <div className="w-full h-full">
          <img className="h-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
