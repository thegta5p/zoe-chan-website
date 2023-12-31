import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import MainLayout from "../components/mainLayout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import HomeStyle from "../styles/HomePage.module.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Home() {
  const list = [
    {
      title: "Who is Zoe?",
      link: "/ZoeLore/LorePage",
      image: "/images/BaseZoe.PNG",
      alt: "Image of Base Zoe"
    },
    {
      title: "Zoe Builds",
      link: "https://u.gg/lol/champions/zoe/build",

      image: "/images/CyberZoe2.PNG",
      alt: "Image of Cyber Pop Zoe"
    }

  ];
  return (
    <>
      <MainLayout home></MainLayout>
      <div className={HomeStyle.HomeLinks}>
        {list.map((item, index) => (
          <Card
            shadow="lg"
            isPressable
            isHoverable
            disableRipple
            radius="lg"
            className="border-none max-w-lg max-h-lg"
            onPress={() => (location.href = item.link)}
            key={index}
            >
            <Image priority
              src={item.image}
              height={1080}
              width={1920}
              alt={item.alt}
            />
            <CardHeader className="absolute bottom-0 justify-center">
              <h1 className="text-2xl font-bold text-cyan-500 px-10">
                {item.title}
              </h1>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
