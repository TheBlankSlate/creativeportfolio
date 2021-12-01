import React from 'react';
import { DiCode, DiDatabase, DiVisualstudio } from 'react-icons/di';
import { MdLaptopWindows } from 'react-icons/md'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../ToolsStyles';

const ToolsCoding = () => (
  <Section id="toolsCoding">
    <SectionDivider />
    <SectionTitle><br />Tools</SectionTitle>
    <SectionText>
      I've used many different tools, software, and languages to make any project that I need to.
    </SectionText>
    <List>
      <ListItem>
        <MdLaptopWindows size="3rem" />
        <ListContainer>
          <ListTitle>Computer</ListTitle>
          <ListParagraph>
            Desktop: <br />
            Dell XPS 8600 <br />
            Laptop: <br />
            HP Omen 15-EN0023DX
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with: <br />
            C#, C++, Java, JavaScript/TypeScript, HTML/CSS, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>IDEs</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Visual Studio Code, Visual Studio. IntiliJ, Eclipse
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
          <ListParagraph>
            Experience with: <br />
            MySQL, MongoDB, Docker, Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default ToolsCoding;