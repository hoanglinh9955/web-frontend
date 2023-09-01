'use client'
import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    rem,
    Container,
    AspectRatio,
    Stack
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { Contact } from '../lien-he/page';
import { contactprops } from '../fakedata';

//   import { ContactIconsList } from '../ContactIcons/ContactIcons';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 400,
      boxSizing: 'border-box',
      borderRadius: theme.radius.md,
      padding: `calc(${theme.spacing.xl} * 2.5)`,
  
      [theme.fn.smallerThan('sm')]: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.white,
      lineHeight: 1,
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: rem(300),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.colors[theme.colors.green[4]],
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.xs,

    },
  
    social: {
      color: theme.white,
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
      color: theme.black,
    },
  
    control: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  }));
  
  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
function Map() {
    return (
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://maps.google.com/maps?q=66/1%20%E1%BA%A4p%203,%20Xu%C3%A2n%20Th%E1%BB%9Bi%20Th%C6%B0%E1%BB%A3ng,%20H%C3%B3c%20M%C3%B4n,%20TP.HCM&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          title="Google map"
          frameBorder="0"
        />
      </AspectRatio>
    );
  }

  export default function ContactUs() {
    const { classes } = useStyles();
  
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
        <Container>
        <Stack>
      <div className={classes.wrapper}>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            
            <Contact data={contactprops}/>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
        <Map/>
        </Stack>
      </Container>
    );
  }
