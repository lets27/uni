import "./campus.css";

import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
const Campus = () => {
  return (
    <>
      <div className="campus">
        <div className="gallery">
          <img src={gallery1} alt="snap" />
          <img src={gallery2} alt="snap" />
          <img src={gallery3} alt="snap" />
          <img src={gallery4} alt="snap" />
        </div>
        <button className="btn dark-btn">see more</button>
      </div>
    </>
  );
};

export default Campus;
