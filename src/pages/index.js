import BgAnimation from '../components/Home/BackgroundAnimation';
import Hero from '../components/Home/Hero';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
    </Layout>
  );
};

export default Home;
