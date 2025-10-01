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

import { FeedbackShow } from "./feedback";


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
