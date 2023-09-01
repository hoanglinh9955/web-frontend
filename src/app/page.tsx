'use client'
import { CardsCarousel, Card} from '@/components/carousel'
import Image from 'next/image'
import { carouselprops, lineprops } from './fakedata'
import { Button, Group, Paper, Stack, Container} from '@mantine/core'
import Line from '@/components/line'
import { useStyles } from '@/styles/Card'
export default function Home() {
  const { classes } = useStyles();
  const cards = carouselprops.map((item) => {
    return <Paper
        shadow="md"
        p="xl"
        radius="xl"
        sx={{ backgroundImage: `url(${item.image})` }}
        className={classes.card}
    >
    </Paper>
})
  return (
    <main>
      <Container>
      <Stack>
      <CardsCarousel delay={3000} numCard={4}>
                {cards}
      </CardsCarousel>
      
      </Stack>
      </Container>
      
    </main>
  )
}
