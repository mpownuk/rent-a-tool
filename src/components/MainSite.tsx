import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

type image_src = {
  "image-src": string;
};

export const loader = async () => {
  const images = await fetch("./data/main-site-images.json")
    .then((res) => res.json())
    .then((data) => data.images.map((img: image_src) => img["image-src"]));
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
  const [imageAnimation, setImageAnimation] = useState(true);

  useEffect(() => {
    let imageIndex = 1;
    const interval = setInterval(() => {
      setImageAnimation(true);
      setCurrentImage(siteImages[imageIndex]);
      imageIndex++;
      if (imageIndex === siteImages.length) imageIndex = 0;
      setTimeout(() => {
        setImageAnimation(false);
      }, 3960);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainsite">
      <div>{currentImage}</div>
      <img
        className={`${
          imageAnimation ? "mainsite__image" : "mainsite__image--invisible"
        }`}
        src={currentImage}
        alt="main site photogrphy"
      ></img>
    </div>
  );
};

export default MainSite;
