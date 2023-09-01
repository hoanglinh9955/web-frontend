'use client'
import { Container, Group, Stack, Title, Anchor, Text, Box, TextInput, Button, Input} from "@mantine/core"
import { useForm } from '@mantine/form';
import { Icon } from "@tabler/icons-react"
import { contactprops } from "../fakedata"
import { AspectRatio } from '@mantine/core'

export function Contact({data} : { data:{
    title: string,
    information: {icon: Icon, components: {text: string, link: string | undefined}[]}[]
}}) {
    const information = data.information.map((item) => {
        return <Group>
            <item.icon/>
            {item.components.map((component) => {
                if (component.link) {
                    return <Anchor href={component.link}>{component.text}</Anchor >
                } else {
                    return <Text>{component.text}</Text>
                }
            })}
        </Group>
    })
    return <Container>
        <Stack>
            <Title>Thông Tin Liên Hệ</Title>
            <Title>{data.title}</Title>
            {information}
        </Stack>
    </Container>
}

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

function ContactForm () {
  const form = useForm({
    initialValues: { name: '', phoneNumber:'' , email: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      phoneNumber: (value) => (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value) ? null : 'Invalid Phone Number'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  function Demo() {
    return (
      <Group>
        <Input.Label required>Input label</Input.Label>
        <Input.Description>Input description</Input.Description>
        <Input.Error>Input error</Input.Error>
      </Group>
    );
  }
  return (
    <Container>
    {/* <Box maw={2000} mx="auto" mb={"50"}> */}
      <form onSubmit={form.onSubmit(console.log)}>
        

        <TextInput label="Họ và Tên " placeholder="Họ và Tên" withAsterisk {...form.getInputProps('name')}/>
        <TextInput label="Số Điện Thoại" placeholder="Số Điện Thoại" withAsterisk {...form.getInputProps('phoneNumber')} />
        <TextInput mt="sm" label="Email" placeholder="Email" withAsterisk {...form.getInputProps('email')} />
        
        <Button type="submit" mt="sm">
          Gửi Yêu Cầu
        </Button>
      </form>
    {/* </Box> */}
    </Container>
  );
}

export default function PageContact() {
    return (
        <Container>
            <Stack>
            <Contact data={contactprops}/>
            <ContactForm/>
            <Map/>
        </Stack>
        
        </Container>
        
    )
}

