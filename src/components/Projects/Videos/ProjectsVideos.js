import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../../styles/GlobalComponents';

const ProjectsMusic = () => (
    <Section>
        <SectionDivider />
        <SectionTitle main>Video Projects</SectionTitle>
        <SectionText>
            Below is a playlist of my best works
        </SectionText>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLINOBX4uhunGtz-ibs-120NlS3YbS9JRj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Section>
);

export default ProjectsMusic;