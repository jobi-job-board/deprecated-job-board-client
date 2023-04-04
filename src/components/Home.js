import About from './About';
import Grid from './Grid';
import Footer from './Footer';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Ratings from './Ratings';

const Home = () => {
  return (
    <>
      <Hero />
      <Ratings />
      <HowItWorks />
      <About />
      <Grid />
      <Footer />
    </>
  );
};

export default Home;
