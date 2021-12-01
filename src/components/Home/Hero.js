import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to: <br />
        Matthew Hostetler's <br />
        MULTIMEDIA Portfolio
      </SectionTitle>
      <SectionText>
        I love Coding, Producing Music, and Editing Videos.<br /> Take a look around!
      </SectionText>
      <Button onClick={() => window.location = '/about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;