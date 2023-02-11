import Typewriter from "typewriter-effect";
import {
  AiOutlineCaretRight,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const style = {
  section: "w-full flex flex-col-reverse gap-4 space-y-4 lg:flex-row  ",

  icon: " w-8 h-8 cursor-pointer lg:hover:text-blue-900 lg:hover:scale-125 transition-transform",
  title: " text-3xl text-center md:text-start lg:text-5xl",
  iconSection:
    "flex justify-center gap-4 lg:flex-col lg:items-end lg:mr-10 lg:mt-10 lg:w-1/3 ",
  introWrapper: "  mx-auto self-center  space-y-2 ",
  introAbout: " text-justify leading-tight  xl:pr-20 ",
  btn: "hidden bg-titleColor text-white md:py-2 lg:px-3 py-1.5 px-2 text-[0.7rem] md:text-sm font-bold  rounded-lg lg:hover:bg-transparent lg:hover:text-titleColor  border transition-color  duration-500 ease-out lg:hover:border-titleColor lg:flex lg:gap-2 lg:items-center  ",
  arrow:
    " text-[1.2rem] font-extraBold transition-transform  duration-500 ease-out",
  typeWriterInner: "  max-w-[250px] mx-auto md:mx-0",
};

const IntroSection = () => {
  return (
    <div className={style.section}>
      <div className={style.iconSection}>
        <Link
          href={"https://www.facebook.com/AayushTamang2002"}
          target="_blank"
        >
          <AiFillFacebook className={style.icon} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/aayush-tamang-2995591ab/"}
          target="_blank"
        >
          <AiFillLinkedin className={style.icon} />
        </Link>
        <Link href={"https://twitter.com/iceTmZzz"} target="_blank">
          <AiFillTwitterCircle className={style.icon} />
        </Link>
      </div>
      <div className={style.introWrapper}>
        <h1 className={style.title}>Aayush Tamang</h1>
        {/* typewriter wrapper */}
        <div>
          <div className={style.typeWriterInner}>
            <Typewriter
              className={style.typeW}
              options={{
                loop: true,
                autoStart: true,
                wrapperClassName: "intro",
              }}
              onInit={(typ) => {
                typ
                  .typeString("Web Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Programmer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Freelancer")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
        <p className={style.introAbout}>
          I'm enthusiastic web developer and designer based in Nepal. I'm
          passionate and devoted to Technology and Web
        </p>
        <Link href={"/#portfolioSection"} className="inline-block">
          <button className={`${style.btn} portBtn`}>
            Portfolio
            <AiOutlineCaretRight className={` ${style.arrow} arrow`} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IntroSection;
