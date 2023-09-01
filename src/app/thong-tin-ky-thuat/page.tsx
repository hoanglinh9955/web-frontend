'use client'
import { Container, Image } from "@mantine/core";
import { Grid, SimpleGrid, Skeleton, useMantineTheme, rem, Button} from '@mantine/core';
import { useState } from 'react';


function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        height={300}
        alt="Norway"
      />
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton 
      </Button>
    </>
  );
}

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="md">
        <Grid gutter="xl">
     
          <Grid.Col span={8}>
          <Demo/>
          </Grid.Col>
          <Grid.Col span={4}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      
    </Container>
  );
}
export default function NewsPage(){
    return (
        <Container>
            <LeadGrid/>
        </Container>
    )
}