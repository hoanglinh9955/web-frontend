'use client'
import { Children, ReactComponentElement, ReactNode, useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';
import {  Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import PropTypes from 'prop-types';
import { useStyles } from '@/styles/Card';


interface CardProps {
  image: string;
}

export function Card({ image }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      {/* <div> */}
        {/* <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title> */}
      {/* </div> */}
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

export function CardsCarousel({ delay, numCard, children } : { delay: number, numCard : number, children: ReactNode[]}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const duplicateArray = children;
  
  while(children.length < numCard){
    children = children.concat(duplicateArray)
  }

  // while(children.length % numCard != 0){
  //   children = children.concat(children[children.length -1])
  // }
  
  const slides = children?.map((child, index) => (
    <Carousel.Slide key={index}>
      {child}
    </Carousel.Slide>
  ));
  const slideWidth = numCard === 3 ? '33.34%' : `${100 / numCard}%`
    
  if (delay == 0){
    delay = 1000000
  }
  const autoplay = useRef(Autoplay({ delay: delay }));
  
  return (
    <Carousel
      loop
      slideSize={slideWidth}
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      
    //   plugin
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}