import Image from "next/image";
import Link from "next/link";

const style = {
  wrapper: "  group  shadow-lg rounded-xl text-white relative overflow-hidden ",
  titleWrapper: "flex flex-col items-center",
  workTitle: "text-center  text-xl md:text-2xl uppercase  cursor-default ",
  skills: " uppercase text-xs md:text-sm text-white/80  ",
  outerLayer:
    "h-full w-full absolute bg-black/70 top-0 left-0  backdrop-blur-[2px] flex flex-col  space-y-4 md:space-y-6 justify-center items-center transition-opacity group-hover:opacity-100 ease-out duration-500 opacity-0",
  buttonWrapper: " flex justify-between gap-2 md:gap-4 ",
  btn: " text-sm px-4 py-1 md:px-6 md:py-2 text-black bg-white rounded-xl hover:bg-white/20 hover:text-white transition-background duration-300  ease-out",
};

const WorkBlock = ({ backgroundImg, title, skills, repoLink, liveLink }) => {
  return (
    <div className={style.wrapper}>
      <Image className={style.background} src={backgroundImg} alt="/" />
      <div className={style.outerLayer}>
        <div className={style.titleWrapper}>
          <h1 className={style.workTitle}>{title}</h1>
          <p className={style.skills}>{skills.join("/")}</p>
        </div>

        <div className={style.buttonWrapper}>
          <Link href={repoLink} target="_blank">
            <button className={style.btn}>Code</button>
          </Link>
          <Link href={liveLink} target="_blank">
            <button className={style.btn}>Live Site</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkBlock;
