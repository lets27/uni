import nextBtn from "../../assets/next-icon.png";
import backBtn from "../../assets/back-icon.png";
import { users } from "./data";
import "./testimonial.css";
import { useRef } from "react";

const Testimonial = () => {
  const slider = useRef();
  let translateX = 0;
  function slideUp() {
    if (translateX > -50) {
      translateX -= 25;
    }
    console.log("tx:", translateX);
    slider.current.style.transform = `translateX(${translateX}%)`;
  }

  function slideBack() {
    if (translateX < 0) {
      translateX += 25;
    }
    console.log("tx:", translateX);
    slider.current.style.transform = `translateX(${translateX}%)`;
  }

  const userList = users.map((user) => (
    <li key={user.id}>
      <div className="slide">
        <div className="user-info">
          <img src={user.img} alt="img" />
          <div className="name">
            <h3>{user.name}</h3>
            <span>{user.school}</span>
          </div>
        </div>
        <p>{user.info}</p>
      </div>
    </li>
  ));

  return (
    <>
      <div className="testimonial">
        <img className="nextBtn" src={nextBtn} alt="img" onClick={slideUp} />
        <img className="backBtn" src={backBtn} alt="img" onClick={slideBack} />
        <div className="slider">
          <ul ref={slider}>{userList}</ul>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
