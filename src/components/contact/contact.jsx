import "./contact.css";
import msgIcon from "../../assets/msg-icon.png";
import phone from "../../assets/mail-icon.png";
import mail from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-column">
          <h3>
            Send us a message <img src={msgIcon} alt="msg" />
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur
            <br /> voluptatum accusamus iste ut molestias, reprehenderit eum
            adipisci optio! Autem laudantium ducimus velit illo!
          </p>
          <ul>
            <li>
              <img src={phone} alt="phone icon" /> +267 7858483
            </li>
            <li>
              <img src={mail} alt="mail icon" /> contact@Megmail
            </li>
            <li>
              <img src={location} alt="location icon" /> Gaboronne
            </li>
          </ul>
        </div>
        <div className="contacts-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
