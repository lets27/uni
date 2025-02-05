import "./nav.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
// import menuIcon from "../../assets/menu-icon.png";
import { useEffect, useState } from "react";
const Nav = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    //using DOM eventListener  listen for when user scrolls and trigger at 50px
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <div>
      <nav className={`nav-bar container ${sticky ? `dark-nav` : null}`}>
        <img className="logo" src={logo} alt="image dah" />
        <div className="left-side">
          <ul>
            <li>
              <Link to={"hero"} smooth={true} offset={0} duration={500}>
                home
              </Link>
            </li>
            <li>
              <Link to={"programs"} smooth={true} offset={-260} duration={500}>
                program
              </Link>
            </li>
            <li>
              <Link to={"about"} smooth={true} offset={-150} duration={500}>
                about
              </Link>
            </li>
            <li>
              <Link to={"campus"} smooth={true} offset={-260} duration={500}>
                campus
              </Link>
            </li>
            <li>
              <Link
                to={"testimonial"}
                smooth={true}
                offset={-260}
                duration={500}
              >
                testimonial
              </Link>
            </li>

            <li>
              <Link
                className="btn"
                to={"contact"}
                smooth={true}
                offset={-250}
                duration={500}
              >
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
