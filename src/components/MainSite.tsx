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

  useEffect(() => {
    let imageIndex = 1;
    const interval = setInterval(() => {
      setCurrentImage(siteImages[imageIndex]);
      imageIndex++;
      if (imageIndex === siteImages.length) imageIndex = 0;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainsite">
      <div className="mainsite__image--wraper">
        <img
          className="mainsite__image"
          src={currentImage}
          alt="main site photogrphy"
        ></img>
      </div>
    </div>
  );
};

export default MainSite;
