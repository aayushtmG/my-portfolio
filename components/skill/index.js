import SkillBlock from "./SkillBlock"
import htmlIcon from "../../public/icons/html.png"
import cssIcon from "../../public/icons/css.png"
import javascriptIcon from "../../public/icons/javascript.png"
import reactIcon from "../../public/icons/react.png"
import githubIcon from "../../public/icons/github.png"
import wordpressIcon from "../../public/icons/wordpress.png"
import tailwindIcon from "../../public/icons/tailwind.png"
import nextjsIcon from "../../public/icons/nextjs.png"
const style = {
  wrapper: "container py-20 xl:py-10 h-max 2xl:h-screen",
  title:
    "tracking-wider text-4xl font-bold underline underline-titleColor text-titleDark decoration-2 text-center underline-offset-4  ",
  titleWrapper: "w-4/5 mx-auto ",
  blockWrapper:
    " py-5 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-4/5 mx-auto ",
  titleDescription: "hidden lg:block text-textColor text-center pt-2",
}

const Skill = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleWrapper}>
        <h1 className={style.title}>Skills</h1>
        <h2 className={style.titleDescription}>
          Technologies I am experienced in
        </h2>
      </div>
      <div className={style.blockWrapper}>
        <SkillBlock img={htmlIcon} title={"html"} />
        <SkillBlock img={cssIcon} title={"css"} />
        <SkillBlock img={javascriptIcon} title={"javascript"} />
        <SkillBlock img={reactIcon} title={"react"} />
        <SkillBlock img={githubIcon} title={"github"} />
        <SkillBlock img={nextjsIcon} title={"nextjs"} />
        <SkillBlock img={tailwindIcon} title={"tailwind"} />
        <SkillBlock img={wordpressIcon} title={"wordpress"} />
      </div>
    </div>
  )
}

export default Skill
