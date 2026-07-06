import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Competitions from '../components/Competitions';
import UserJourney from '../components/UserJourney';
import About from '../components/About';
import Categories from '../components/Categories';
import WhyRegister from '../components/WhyRegister';
import JoinEcosystem from '../components/JoinEcosystem';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh' }}>
      {/* <div style={{ padding: '50px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>BotLeague</h1>
        <p style={{ fontSize: '24px', marginBottom: '20px' }}>Loading components...</p>
      </div> */}
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
