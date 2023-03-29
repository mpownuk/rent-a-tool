import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const loader = () => {
  const images: string[] = [
    "./images/header-photos/header-photo1.jpg",
    "./images/header-photos/header-photo2.jpg",
    "./images/header-photos/header-photo3.jpg",
    "./images/header-photos/header-photo4.jpg",
  ];
  return images;
};

const MainSite: React.FC = () => {
  const imagesSrc = useLoaderData();

  const imagesSrcHandler = (imgData: any) => {
    if (imgData.every((img: any) => typeof img === "string")) {
      return imgData;
    } else {
      throw Error("data are not valid!!");
    }
  };

  const siteImages = imagesSrcHandler(imagesSrc);

  const [currentImage, setCurrentImage] = useState<string>(siteImages[0]);

  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      setCurrentImage(siteImages[counter]);
      counter++;
      if (counter === siteImages.length) counter = 0;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainsite">
      <img className="mainsite__image" src={currentImage}></img>
    </div>
  );
};

export default MainSite;
