import Image from "next/image";
import hero from "../../public/hero-image.png";

const style = {
  img: " mx-auto  max-w-[300px] md:max-w-[600px] lg:max-w-[800px] w-full ",
};

const HeroImage = () => {
  return (
    <div className={style.imageWrapper}>
      <Image src={hero} className={style.img} alt="aayush tamang"></Image>
    </div>
  );
};

export default HeroImage;
