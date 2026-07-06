import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Competitions from '../components/Competitions';
import UserJourney from '../components/UserJourney';
import About from '../components/About';
import Categories from '../components/Categories';
import Disciplines from '../components/Disciplines';
import WhyRegister from '../components/WhyRegister';
import JoinEcosystem from '../components/JoinEcosystem';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-bot-dark">
      <Navbar />
      <Hero />
      <Competitions />
      <UserJourney />
    
      <Categories />
       <About />
      <WhyRegister />
      <JoinEcosystem />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
