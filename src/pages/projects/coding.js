import ProjectsCoding from '../../components/Projects/Coding/ProjectsCoding';
import AboutCoding from '../../components/Projects/Coding/AboutCoding';
import ToolsMusic from '../../components/Projects/Coding/ToolsCoding';
import AcomplishmentsCoding from '../../components/Projects/Coding/AcomplishmentsCoding';
import { Layout } from '../../layout/Layout';

const ProjectCoding = () => {
    return (
        <Layout>
            <AboutCoding />
            <ProjectsCoding />
            <ToolsMusic />
            {/* <AcomplishmentsCoding /> */}
        </Layout>
    );
};

export default ProjectCoding;