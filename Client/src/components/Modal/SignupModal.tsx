const SignupModal = (props: any) => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;
    console.log(email, password);
  };
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden
      overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* Content */}
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full 
          bg-white outline-none focus:outline-none m-20 py-3"
          >
            {/* Header */}
            <div
              className="flex items-start justify-between p-5 border-b 
            border-solid border-blueGray-200 rounded-t"
            >
              <h3 className="text-3xl font-semibold">Signup</h3>
              {/* Close Button */}
              <button
                className="p-1 ml-auto border-0 float-right text-3xl leading-none 
                font-semibold outline-none focus:outline-none"
                onClick={props.onClose}
              >
                <span
                  className="bg-transparent text-gray-800 h-8 w-8 text-2xl 
                block outline-none focus:outline-none"
                >
                  x
                </span>
              </button>
            </div>
            {/* Form */}
            <form onSubmit={handleFormSubmit} className="mx-10 my-4">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full p-2 text-primary border rounded-md outline-none 
                  text-sm transition duration-150 ease-in-out mb-4"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="w-full p-2 text-primary border rounded-md outline-none 
                  text-sm transition duration-150 ease-in-out mb-4"
                  id="password"
                  placeholder="Your Password"
                />
              </div>
              <div className="flex justify-center items-center mt-6">
                <button
                  className="bg-green-500 py-2 px-8 text-lg text-white 
                rounded border border-green focus:outline-none focus:border-green-dark"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </>
  );
};
export default SignupModal;
