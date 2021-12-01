import ProjectsMusic from '../../components/Projects/Music/ProjectsMusic';
import ToolsMusic from '../../components/Projects/Music/ToolsMusic'
import AboutMusic from '../../components/Projects/Music/AboutMusic';
import { Layout } from '../../layout/Layout';

const ProjectMusic = () => {
    return (
        <Layout>
            <AboutMusic />
            <ProjectsMusic />
            <ToolsMusic />
        </Layout>
    );
};

export default ProjectMusic;