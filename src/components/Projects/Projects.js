import React from 'react';

import Button from '../../styles/GlobalComponents/Button';
import { Section } from '../../styles/GlobalComponents';

const Projects = () => (
    <Section>
        <Button onClick={() => window.location = 'projects/music'}>Music</Button>
        <Button onClick={() => window.location = 'projects/coding'}>Coding</Button>
        <Button onClick={() => window.location = 'projects/videos'}>Video</Button>
    </Section>
);

export default Projects;