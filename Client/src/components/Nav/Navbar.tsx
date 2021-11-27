import { useContext } from "react";
import { UserContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex justify-between my-5 mx-6">
      <Link to="/">
        <button className="font-semibold text-green-600 text-lg">Home</button>
      </Link>
      {state.data && (
        <button
          onClick={handleLogout}
          className="font-semibold text-blue-600 text-lg mr-3"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
