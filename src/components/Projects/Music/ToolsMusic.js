import React from 'react';
import { GiDrum } from 'react-icons/gi';
import { SiMidi, SiReasonstudios } from 'react-icons/si'
import { MdLaptopWindows, MdAudiotrack } from 'react-icons/md'
import { BsPlug, BsFillMicFill } from 'react-icons/bs'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../ToolsStyles';

const ToolsMusic = () => (
    <Section id="toolsCoding">
        <SectionDivider />
        <SectionTitle><br />Tools</SectionTitle>
        <SectionText>
            I use many different tools, software, and instruments to make the music I want.
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
                <SiReasonstudios size="3rem" />
                <ListContainer>
                    <ListTitle>DAW</ListTitle>
                    <ListParagraph>
                        I Use: <br />
                        Reason 11 [Standard] <br />
                        I've used: <br />
                        Ableton Live, Pro Tools, Logic Pro
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <SiMidi size="3rem" />
                <ListContainer>
                    <ListTitle>MIDI Controllers/Keyboards</ListTitle>
                    <ListParagraph>
                        I Use: <br />
                        Akai MPK Mini Mk II, Novation Impulse 61, and Casio CTK-1000
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <BsFillMicFill size="3rem" />
                <ListContainer>
                    <ListTitle>Vocal/General Microphone</ListTitle>
                    <ListParagraph>
                        I Use: <br />
                        Behringer B-1
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <MdAudiotrack size="3rem" />
                <ListContainer>
                    <ListTitle>Audio Interface</ListTitle>
                    <ListParagraph>
                        Normal Use: <br />
                        Behringer U-PHORIA UMC 404HD <br />
                        Drum Recording: <br />
                        Behringer  U-PHORIA UMC1820
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <BsPlug size="3rem" />
                <ListContainer>
                    <ListTitle>Plugins</ListTitle>
                    <ListParagraph>
                        I use: <br />
                        All of the DAWs' Stalk plugins, Serum by Xfer, Hybrid 3 by AIR Music Technology
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <GiDrum size="3rem" />
                <ListContainer>
                    <ListTitle>Instruments</ListTitle>
                    <ListParagraph>
                        I play: <br />
                        Drums/Percussion and Piano
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default ToolsMusic;
