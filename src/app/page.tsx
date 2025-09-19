import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";

export default async function Home() {
  const {object}: HomeProps = await getDataHome()
//Ja direciona o obect da api que estaria o data.object
//console.log(data.object.metadata.heading) por exemplo



  return (
        <main>
       <Submenu/>
        <Hero/>
         </main>
  );
}
