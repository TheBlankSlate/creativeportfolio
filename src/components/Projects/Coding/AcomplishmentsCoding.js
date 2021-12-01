import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../AcomplishmentsStyles';

const data = [
  { number: 4, text: 'Discord Bots' },
  { number: 1, text: 'Music Videos', },
  { number: 20, text: 'Songs Made', }
];

const AcomplishmentsCoding = () => (
  <Section>
    <SectionDivider /> 
    <SectionTitle><br />Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default AcomplishmentsCoding;
