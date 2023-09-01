'use client'
import { Card, CardsCarousel } from "@/components/carousel";
import CardItem from "@/components/item-card";
import { Container, Grid, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { carouselprops, lineprops } from "../fakedata";
import Line from "@/components/line";
import BreakCrumbs from "@/components/breakcrumbs";


export default function PageSanPham(){
    const slides = carouselprops.map((item, index) => {
        return <Card {...item}/>
    })
    return (
        <Container>
            <BreakCrumbs data = {[
                { title: 'Home', href: '/' },
                { title: 'san-pham', href: '/san-pham'},
             
                ]}/>
            <Title>San Pham</Title>
            <Line data={lineprops}/>
            <Line data={lineprops}/>
            <Line data={lineprops}/>
            <Line data={lineprops}/>
       
        </Container>
    )
}