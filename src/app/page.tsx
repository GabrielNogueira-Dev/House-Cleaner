import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubirMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu.type";

import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import styles from './styles.module.scss'
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Contacts } from "@/components/home/contacts";

import 'react-toastify/dist/ReactToastify.css';

import { Metadata } from "next"

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mrs. Cleaning – Limpeza Profissional nos EUA",
    description: "Serviços de limpeza residencial e comercial com atendimento personalizado.",
    openGraph: {
      title: "Mrs. Cleaning – Limpeza Profissional nos EUA",
      description: "Serviços de limpeza residencial e comercial com atendimento personalizado.",
      url: "https://house-cleaner.vercel.app/",
      images: [
        {
          url: "https://cdn.cosmicjs.com/84e63dc0-9596-11f0-bba7-d56988718db7-banner01.png",
          width: 1200,
          height: 627,
          alt: "Banner Mrs. Cleaning"
        }
      ],
      type: "website"
    },
    robots: {
      index: true,
      follow: true
    }
  }
}


export default async function Home() {
  const {object}: HomeProps = await getDataHome()
//Ja direciona o obect da api que estaria o data.object
//console.log(data.object.metadata.heading) por exemplo

const menu: MenuProps = await getSubirMenu()
//console.log(menu.objects[0])


  return (

        <main className={styles.background}>

   {menu.objects.length > 0 && <Submenu menu={menu}/>}

        <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
       icon={<Phone size={24} color="white"/>}
       />
    <Container>
       <Services object={object}/>
       <Contacts object={object}/>
    </Container>
         </main>
  );
}
