import "./program.css";
import prog1 from "../../assets/program-1.png";
import prog2 from "../../assets/program-2.png";
import prog3 from "../../assets/program-3.png";
import program1 from "../../assets/program-icon-1.png";
import program2 from "../../assets/program-icon-2.png";
import program3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div>
      <div className="programs ">
        <div className="program">
          <img src={prog1} alt="prog" />
          <div className="caption">
            <img src={program1} alt="" />
            <p>graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={prog2} alt="prog" />
          <div className="caption">
            <img src={program2} alt="" />
            <p>graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={prog3} alt="prog" />
          <div className="caption">
            <img src={program3} alt="" />
            <p>graduation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
