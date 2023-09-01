import { Breadcrumbs, Anchor } from '@mantine/core';



export default function cBreakCrumbs({ data }: { data: {title: string, href: string}[] }) {
    const links = data.map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
    return (
    <>
      <Breadcrumbs separator="→" mt="xs">{links}</Breadcrumbs>
    </>
  );
}