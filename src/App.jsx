import About from "./components/about.jsx/about";
import Campus from "./components/campus/campus";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Programs from "./components/programms/programs";
import Testimonial from "./components/testimonial/testimonial";
import Title from "./components/title/title";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Title subtitle={"what we offer"} title={"our Programs"} />
      <div className="container">
        <Programs />
      </div>
      <About />
      <Title subtitle={"campus photos"} title={"our gallery"} />
      <Campus />
      <Title subtitle={"Hear from our students"} title={"testimonials"} />
      <Testimonial />
      <Title subtitle={""} title={"contact us"} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
