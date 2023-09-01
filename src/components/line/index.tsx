'use client'
import { Carousel } from '@mantine/carousel';
import {createStyles, Avatar, Button, Group, Paper, Title, rem, Stack, Container } from '@mantine/core';
import { CardsCarousel } from '../carousel';

export interface LineProps{
    link: string, 
    image: {src: string,} 
    title: string
}


const useStyles = createStyles((theme) => ({
    card: {
      height: rem(300),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      color: theme.white,
      lineHeight: 1.2,
      fontSize: rem(32),
      //marginTop: theme.spacing.xs,
    },
  
    category: {
      color: theme.white,
      opacity: 0.7,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  }));
  
export default function Line({data} : {data: LineProps[]}) {
    const { classes } = useStyles();
    
    const cards = data.map((item) => {
        return <Paper
            shadow="md"
            p="xl"
            radius="xl"
            sx={{ backgroundImage: `url(${item.image.src})` }}
            className={classes.card}
        >
     
            <Button variant="light" color="dark" radius={'xl'}>
                {item.title}
            </Button>
        </Paper>
    })

    return (
        <Stack>
            <Title>Line Tom</Title>
            <CardsCarousel delay={3000} numCard={4}>
                {cards}
            </CardsCarousel>
            <Container>
                <Button>X</Button>
            </Container>        
        </Stack>  
    );
}