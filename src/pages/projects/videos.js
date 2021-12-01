import ProjectsVideos from '../../components/Projects/Videos/ProjectsVideos';
import AboutVideos from '../../components/Projects/Videos/AboutVideos';
import ToolsVideos from '../../components/Projects/Videos/ToolsVideos';
import { Layout } from '../../layout/Layout';

const ProjectMusic = () => {
    return (
        <Layout>
            <AboutVideos />
            <ProjectsVideos />
            <ToolsVideos />
        </Layout>
    );
};

export default ProjectMusic;