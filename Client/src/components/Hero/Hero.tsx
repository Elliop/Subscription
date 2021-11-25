const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1598024055266-e772a5f8c128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
      }}
      className="w-full h-screen bg-no-repeat bg-cover flex justify-center"
    >
      <div className="flex justify-center items-center w-96 h-96 bg-green-700 mr-96 mt-28 rounded-md shadow-lg">
        <div className="p-6 m-5">
          <h1 className=" text-4xl font-bold text-white mb-4">
            Feed your mind with the best articles
          </h1>
          <h5 className="text-lg text-white">
            Grow, learn, and become more successful by reading some of the top
            article by highly reputable individuals
          </h5>
          <div className="mt-6 flex justify-between">
            <button className="bg-blue-500 text-white text-lg font-semibold py-2 px-12 rounded-md">
              Login
            </button>
            <button className="bg-red-500 text-white text-lg font-semibold py-2 px-10 rounded-md">
              Signup
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default Hero;
