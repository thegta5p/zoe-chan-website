import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import MainLayout from "../components/mainLayout";
import utilStyles from '../styles/utils.module.css';
import Image from "next/image";
import Link from 'next/link'
import HomeStyle from '../styles/HomePage.module.css'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export default function Home() {
  const list = [
    {
      title: "Who is Zoe?",
      link: "/ZoeLore/LorePage",
      image: "/images/BaseZoe.PNG"
    },
    {
      title: "Zoe Builds",
      link: "https://u.gg/lol/champions/zoe/build",
      image: "/images/CyberZoe.png",
    }

  ];
  return(
    <>
      <MainLayout home>

      </MainLayout>
    <div className={HomeStyle.HomeLinks}>
      {list.map((item, index) => (
        <Card 
        shadow="lg"
        isPressable
        isHoverable
        radius="lg"
        className="border-none"
        onPress={()=>location.href = item.link}
        key={index}
        >
          <Image priority
          src={item.image}
          height={1920}
          width={1080}
          />
          <CardFooter className="absolute justify-center">
            <h1 className="text-2xl px-10"></h1>
          </CardFooter>
        </Card>
          
      
      ))}
    </div>
    
    </>
    
  )
}