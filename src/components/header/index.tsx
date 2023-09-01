'use client'
import { createStyles, Header, Menu, Group, Center, Burger, Container, rem, Avatar, Divider, Text, Stack, Autocomplete } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.black,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
}));

export interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] | undefined }[];
  slogan: string,
  logo: {src: string},
}

export function HeaderMenuColored({ links, slogan, logo }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => {
                //event.preventDefault();
                console.log("this work");
              }}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => {
          // event.preventDefault()
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={100} mb={20}>
      <Container>
        <Stack justify='center'>
        <Group position='apart'>
            <Group>
                <Avatar size={'lg'} radius={'xs'} src={logo.src}/>
                <Divider orientation='vertical'/>
                <Text color='black'>{slogan}</Text>
            </Group>
            <Autocomplete
                className={classes.search}
                placeholder="Search"
                icon={<IconSearch size="1rem" stroke={1.5} />}
                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            />
        </Group>
        <Container>
            <Group spacing={5} className={classes.links}>
                {items}
            </Group>
            <Burger
                opened={opened}
                onClick={toggle}
                className={classes.burger}
                size="sm"
                color="#fff"
            />
        </Container>
        </Stack>
      </Container>
    </Header>
  );
}