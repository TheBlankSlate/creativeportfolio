import React from 'react';
import { SiReasonstudios } from 'react-icons/si'
import { MdLaptopWindows, MdAudiotrack } from 'react-icons/md'
import { HiFilm } from 'react-icons/hi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../ToolsStyles';

const ToolsVideos = () => (
    <Section id="toolsCoding">
        <SectionDivider />
        <SectionTitle><br />Tools</SectionTitle>
        <SectionText>
            I use many different tools to make the videos I want.
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
                <HiFilm size="3rem" />
                <ListContainer>
                    <ListTitle>Video Editing Suite</ListTitle>
                    <ListParagraph>
                        MAGIX VEGAS Post
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <SiReasonstudios size="3rem" />
                <ListContainer>
                    <ListTitle>Audio Editor</ListTitle>
                    <ListParagraph>
                        Reason 11 [Standard]
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default ToolsVideos;
