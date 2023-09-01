import { FooterLinksProps } from '@/components/footers';
import { HeaderSearchProps } from '@/components/header';
import { IconDeviceMobile, IconHomeLink, IconMail, IconPhoneCall } from '@tabler/icons-react';
export const headerprops: HeaderSearchProps = {
    links: [
        {
            label: "Giới thiệu",
            link: "http://localhost:3000/",
            links: undefined,
        },
        {
            label: "Sản Phẩm",
            link: "http://localhost:3000/san-pham",
            links: [
                {
                    label: "Line Smart",
                    link: "line-smart",

                },
                {
                    label: "Line Smart",
                    link: "line-smart",
                    
                },
                {
                    label: "Line Smart",
                    link: "line-smart",
                    
                }
            ]
        },
        {
            label: "Thông Tin Kỹ Thuật",
            link: "http://localhost:3000/thong-tin-ky-thuat",
            links: undefined,
        },
        {
            label: "Liên Hệ",
            link: "http://localhost:3000/lien-he",
            links: undefined,
        },
    ],
    slogan: "Đồng hành cùng nhà chăn nuôi",
    logo: {src: "http://thuocthuysannammy.vn/images/logo.jpg"}
}

export const carouselprops =  [{
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
 
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

  }
]

export const lineprops =  [{
    image:
      {src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
      title: "hello",
      link: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  },
  {
    image:
      {src: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
      title : "title",
      link : "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"

  },
  {
    image:
      {src: 'https://uploads.codesandbox.io/uploads/user/54daace3-bc87-43d9-a4d5-9e068e735798/CY6x-media-2.jpeg'},
      title : "title",
      link : "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"

  },

 
]

export const contactprops = {
    title : 'CÔNG TY TNHH TM & DV NAM MỸ',
    information: [
        {
            icon: IconHomeLink,
            components : [{
                text: "66/1 Ấp 3, Xuân Thới Thượng, Hóc Môn, TP.HCM",
                link: undefined
            }]
        },
        {
            icon: IconPhoneCall,
            components: [
                {
                    text: "0969363642",
                    link: "tel://0969363642"
                }
            ]
        },
        {
            icon: IconDeviceMobile,
            components: [
                {
                    text: "0969363642",
                    link: "tel://0969363642"
                }
            ]
        },
        {
            icon: IconMail,
            components: [
                {
                    text: "linhhohang@dnriof",
                    link: '"cac'
                }
            ]
        }
    ] 
}

export const FooterProps : FooterLinksProps ={
    
        data : [
          {
            "title": "About",
            "links": [
              {
                "label": "Features",
                "link": "#"
              },
              {
                "label": "Pricing",
                "link": "#"                     
              },
              {
                "label": "Support",
                "link": "#"
              },
              {
                "label": "Forums",
                "link": "#"
              }
            ]
          },
          {
            "title": "Project",
            "links": [
              {
                "label": "Contribute",
                "link": "#"
              },
              {
                "label": "Media assets",
                "link": "#"
              },
              {
                "label": "Changelog",
                "link": "#"
              },
              {
                "label": "Releases",
                "link": "#"
              }
            ]
          },
          {
            "title": "Community",
            "links": [
              {
                "label": "Join Discord",
                "link": "#"
              },
              {
                "label": "Follow on Twitter",
                "link": "#"
              },
              {
                "label": "Email newsletter",
                "link": "#"
              },
              {
                "label": "GitHub discussions",
                "link": "#"
              }
            ]
          }
        ]
    }
