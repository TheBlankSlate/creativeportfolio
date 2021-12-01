import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { projects } from '../../../constants/constants';

const ProjectsCoding = () => (
  // <Section nopadding id="projects-coding">
  //   <SectionDivider />
  //   <SectionTitle main>Coding Projects</SectionTitle>
  //   <GridContainer>
  //     {projects.map(({ id, image, title, description, tags, source, visit }) => (
  //       <BlogCard key={id}>
  //         <Img src={image} />
  //         <TitleContent>
  //           <HeaderThree title>{title}</HeaderThree>
  //           <Hr />
  //         </TitleContent>
  //         <CardInfo>{description}</CardInfo>
  //         <div>
  //           <TitleContent>Stack</TitleContent>
  //           <TagList>
  //             {tags.map((tag, i) => (
  //               <Tag key={i}>{tag}</Tag>
  //             ))}
  //           </TagList>
  //         </div>
  //         <UtilityList>
  //           <ExternalLinks href={visit}>Code</ExternalLinks>
  //           <ExternalLinks href={source}>Try</ExternalLinks>
  //         </UtilityList>
  //       </BlogCard>
  //     ))}
  //   </GridContainer>
  // </Section>
  <Section>
    <SectionDivider />
    <SectionTitle main>Coding Projects</SectionTitle>
    <SectionText>
      Below is a playlist of my best works
    </SectionText>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLINOBX4uhunHpsHuBnNHW-g-E7I187-T_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Section>
);

export default ProjectsCoding;