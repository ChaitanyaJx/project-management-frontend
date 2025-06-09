import desktopApp from "./images/DesktopApp.png";
import card1 from "./images/Card1.png";
import card2 from "./images/Card2.png";
import card3 from "./images/Card3.png";
import logopic from "./images/Logos.png";
import grid1 from "./images/GridImage1.png";
import grid2 from "@/assets/images/GridImag2.png";
import grid3 from "@/assets/images/GridImag3.png";
import grid4 from "@/assets/images/GridImage4.png";
import grid5 from "@/assets/images/GridImage5.png";
import Image from "next/image";

const ResponsiveImage = ({ src, alt }: { src: any; alt: string }) => (
  <div className="relative w-full h-full">
    <Image
      alt={alt}
      src={src}
      style={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  </div>
);

// Specific Image Components
export const ImagePic = () => (
  <ResponsiveImage src={desktopApp} alt="Desktop application screenshot" />
);

export const CardPic1 = () => (
  <div className="relative w-full h-full rounded-2xl">
    <Image
      src={card1}
      alt="card1"
      className="w-full h-full object-cover object-left"
    />
  </div>
);

export const CardPic2 = () => (
  <div className="relative w-full h-full rounded-2xl">
    <Image
      src={card2}
      alt="card2"
      className="w-full h-full object-cover object-left"
    />
  </div>
);

export const CardPic3 = () => (
  <div className="relative w-full h-full rounded-2xl">
    <Image
      src={card3}
      alt="card2"
      className="w-full h-full object-cover lg:object-fill object-right lg:object-center"
    />
  </div>
);

export const LogoPic = () => (
  <ResponsiveImage src={logopic} alt="Card illustration 3" />
);

export const GridPic1 = () => (
  <div className="p-2 relative w-full h-full ">
    <Image
      alt="grid1"
      src={grid1}
      style={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  </div>
);
export const GridPic2 = () => (
  <div className="p-2 relative w-full h-full ">
    <Image
      alt="grid1"
      src={grid2}
      style={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  </div>
);
export const GridPic3 = () => (
  <div className="p-2 relative w-full h-full ">
    <Image
      alt="grid1"
      src={grid3}
      style={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  </div>
);
export const GridPic4 = () => (
  <div className="p-2 relative w-full h-full ">
    <Image
      alt="grid1"
      src={grid4}
      style={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  </div>
);

export const GridPic5 = () => (
  <div className="p-2 relative w-full h-full ">
    <Image
      alt="grid1"
      src={grid5}
      style={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  </div>
);
