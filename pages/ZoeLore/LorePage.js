import Image from "next/image";
import Link from "next/link";
import MainLayout from "../../components/mainLayout";
import LorePageStyle from "../../styles/LorePage.module.css";
import utilStyles from "../../styles/utils.module.css";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";



export default function LorePage() {
  const linkList = [
    {
      title: "Zoe Biography",
      img: "/images/Zoe_0.jpg",
      link: "/ZoeLore/ZoeBiography"
    },
    {
      title: "Zoe Side Story",
      img: "/images/Zoe_1.jpg",
      link: "/ZoeLore/ShortStory",
    }
  ];
  return(
    <>
      <MainLayout>

      </MainLayout>
      {linkList.map((item,index) => (
       
         <div className={LorePageStyle.container}>
          <div className="grid">
            <Card
                shadow="lg"
                isPressable
                disableRipple
                isHoverable
                radius="lg"
                className="border-none h-2/4"
                onPress={()=>location.href = item.link}
                key = {index}
                >
                <Image
                  removeWrapper
                  src={item.img}
                  className="z-0 w-full h-full object-cover"
                  width={1920}
                  height={1080}
                />
                <CardHeader className="absolute justify-center">
                  <h1 className="font-bold text-cyan-500 text-2xl pt-10">{item.title}</h1>
                </CardHeader>
            </Card>
          </div>
        </div>
      ))}
    
    </>
  )
}