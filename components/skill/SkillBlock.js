import Image from "next/image";

const style = {
  block:
    " shadow-md lg:cursor-pointer p-5 flex flex-col justify-center items-center  basis-1/3 lg:basis-1/4  rounded-md lg:p-20 gap-1 lg:gap-2 lg:hover:scale-[1.05] transition-transform lg:hover:shadow-lg ",
  skillTitle: "text-titleColor uppercase text-sm md:text-xl",
  icon: "w-10 lg:w-20 ",
};

function SkillBlock({ img, title }) {
  return (
    <div className={style.block}>
      <Image
        src={img}
        className={style.icon}
        width={100}
        height={100}
        alt="/"
      />
      <h1 className={style.skillTitle}>{title}</h1>
    </div>
  );
}

export default SkillBlock;
