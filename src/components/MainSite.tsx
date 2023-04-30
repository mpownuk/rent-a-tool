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

  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    let imageIndex = 1;
    const interval = setInterval(() => {
      setCurrentImage(imageIndex);
      imageIndex++;
      if (imageIndex === siteImages.length) imageIndex = 0;
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mainsite">
      <div className="mainsite__image--wraper">
        {siteImages.map((image: string, index: any) => {
          return currentImage === index ? (
            <img
              key={index}
              className="mainsite__image"
              src={image}
              alt="main site photography"
            ></img>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MainSite;
