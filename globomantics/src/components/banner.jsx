import { logo } from "./banner.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = ({ children }) => {
  const navigate = useNavigate();
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img
          src="./GloboLogo.png"
          alt="logo"
          className={logo}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Banner;
