import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex my-5 mx-6">
      <Link to="/">
        <button className="font-semibold text-green-600 text-lg">Home</button>
      </Link>
    </div>
  );
};

export default Navbar;
