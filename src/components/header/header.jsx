import "./header.css";
import arrow from "../../assets/dark-arrow.png";

const Header = () => {
  return (
    <div>
      <div className="hero container">
        <div className="hero-text">
          <h1>Welcome to our university</h1>
          <div className="info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ullam nobis fuga quam, itaque sit debitis praesentium quos illum
              aut beatae voluptatum quas, tempore culpa.
            </p>
          </div>
          <button className="btn">
            explore <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
