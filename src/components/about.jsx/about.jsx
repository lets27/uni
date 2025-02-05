import "./about.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="left-about">
          <img className="aboutImg" src={aboutImg} alt="about" />
          <img className="play" src={playIcon} alt="about" />
        </div>

        <div className="right-about">
          <h3>about university</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            quis? Vitae esse nemo beatae earum laudantium necessitatibus amet
            temporibus aspernatur obcaecati dolorem, sapiente commodi magni iste
            sequi officiis animi ipsam culpa impedit! Ducimus, cum blanditiis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            quis? Vitae esse nemo beatae earum laudantium necessitatibus amet
            temporibus aspernatur obcaecati dolorem, sapiente commodi magni iste
            sequi officiis animi ipsam culpa impedit! Ducimus, cum blanditiis?
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
