import MainLayout from "../components/mainLayout";
import Image from "next/image";
import { Button, ButtonGroup, image } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";

export default function SkinRandomizer() {
  var currImage = 0;

  const skins = [
    {
      image: "/images/Zoe_0.jpg",
      key: "Zoe",
    },
    {
      image: "/images/Zoe_1.jpg",
      key: "Cyber Pop Zoe",
    },
    {
      image: "/images/ArcanistZoeBase.jpeg",
      key: "Arcanist Zoe",
    },
    {
      image: "/images/ArcanistZoePrest.webp",
      key: "Arcanist Zoe Prestiege Edition",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(skins[0].image);
  const [selectedSkin, setSelectedSkin] = useState(new Set(["Zoe"]));

  /*function returnKey() {
    imageIndex = Math.floor(Math.random() *4);

    return skins[imageIndex].key;
  } 
  */

  function NewImage() {
    const imageIndex = Math.floor(
      Math.random() * Array.from(selectedSkin).length,
    );
    console.log(Array.from(selectedSkin).at(0));
    console.log(selectedSkin);

    for (let i = 0; i < skins.length; i++) {
      if (skins[i].key === Array.from(selectedSkin).at(imageIndex)) {
        setSelectedImage(skins[i].image);
        break;
      }
    }
  }

  const currSkins = useMemo(
    () => Array.from(selectedSkin).join(", "),
    [selectedSkin],
  );

  return (
    <>
      <MainLayout></MainLayout>

      <div className="flex flex-col items-center">
        <Image src={selectedImage} height={480} width={480} />
        <h1 className="font-bold">Skin Randomizer</h1>
        <Listbox
          aria-label="Skins"
          variant="flat"
          disallowEmptySelection
          selectionMode="multiple"
          selectedKeys={selectedSkin}
          onSelectionChange={setSelectedSkin}
        >
          {skins.map((item, index) => (
            <ListboxItem key={item.key}>{item.key}</ListboxItem>
          ))}
        </Listbox>
        <Button color="primary" onPress={NewImage}>
          Change Image
        </Button>
      </div>
    </>
  );
}
