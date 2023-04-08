import About from "./About";
import Blog from "./Blog";
import Grid from "./Grid";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Ratings from "./Ratings";
import Stats from "./Stats";

const Home = () => {
  return (
    <>
      <Hero />
      <Ratings />
      <HowItWorks />
      <About />
      <Stats />
      <Grid />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
