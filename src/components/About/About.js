import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './AboutStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle><br />About Me</SectionTitle>
      <SectionText>
        Hey! My name is Matthew Hostetler and I was born 12/30/2003. I am a computer programmer as well as music producer/drummer and also a video editor/animator.  I come from a humble family out in northern New Jersey, where I have lived my whole life. I enjoy playing video games, spending time with friends, and watching cool tech videos on youtube. I will graduate from Fusion Academy in June of 2022, where I run the Coding Club, where I teach other students basic coding operations. I plan to study Computer Science in college! <br /><br />
        I started programming back when I was in 6th grade but I didn't really get into it until l I was in 10th grade (so 11 years old and 15 years old respectively).  It was my coding teacher that got me into coding, and it made me realize how fun and powerful coding really is. With my newfound love of coding, I was able to make all sorts of things like video games, Discord Bots [plugins], calculators, and much more. <br /><br />
        I've had a love for music since birth! My mom got me a Mozart Cube when I was about 3 years old. Every time the music would stop, I would cry and cry until the music played again (and that cycle repeated). I started drumming when I was 6 years old. The reason why I wanted to start playing drums was because every Sunday at church I would always want to watch the drummer and tap along. I started producing music at 14, thanks to my piano teacher back in 10th grade. We would make songs in our class and I really enjoyed the process of writing recording music! Since then, I have produced many songs and I'm currently collaborating on an album with some friends.  <br /><br />
        When I was younger, my grandpa gave me his old phone and I used that to make all kinds of videos. What began as shooting cringe Xbox 360 ads and silly gaming videos quickly became a passion for video editing. I have since channeled that passion and I've made various types of videos like lyric videos,  music videos, and a satirical PSA.  I've also experimented with 3D animation using a program called Blender. With that I was able to make a video intro and an animation to a song that my friend made.  <br /><br />
        As the future rapidly approaches, I look forward to pursuing a degree in Computer Science with a focus on Cyber Security.  While I work toward success in my career field, I also plan to build a powerful computer for productivity in music and coding as well as for gaming. I also plan to build a music studio featuring a fully modular synthesizer.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;