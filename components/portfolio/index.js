import WorkBlock from "./WorkBlock"
import tictactoe from "../../public/portfolio/tictactoe.png"
import tailwindPage from "../../public/portfolio/tailwindPage.png"
import tipcalculator from "../../public/portfolio/tipcalculator.png"
import todo from "../../public/portfolio/todo.png"
import FlashC from "/public/portfolio/flashC.png"
import FakeStore from "/public/portfolio/fakestore.png"
import NarutoGame from "/public/portfolio/NarutoGame.png"

const style = {
  wrapper: "my-16 container h-max py-20 xl:py-10  ",
  title:
    "tracking-wider text-4xl font-bold underline underline-titleColor text-titleDark decoration-2 text-center underline-offset-4  ",
  titleWrapper: "w-4/5 mx-auto",
  titleDescription: "hidden lg:block text-textColor text-center pt-2",
  blockWrapper:
    "py-20 p-10 mt-10 md:mt-0 flex overflow-x-scroll gap-4 snap-x snap-mandatory md:grid lg:w-4/5 lg:mx-auto md:grid-cols-2",
}
const Portfolio = () => {
  return (
    <div className={style.wrapper} id="portfolioSection">
      <div className={style.titleWrapper}>
        <h1 className={style.title}>Portfolio</h1>
        <h2 className={style.titleDescription}>My Works</h2>
      </div>
      <div className={style.blockWrapper} id="portfolios">
        <WorkBlock
          backgroundImg={tictactoe}
          title={"tic-tac-toe"}
          skills={["html", "css", "js"]}
          repoLink={"https://github.com/aayushtmG/tictactoe"}
          liveLink={"https://aayushtmG.github.io/tictactoe/"}
        />
        <WorkBlock
          backgroundImg={tailwindPage}
          title={"Tailwind Page"}
          skills={["html", "css", "tailwind"]}
          repoLink={"https://github.com/aayushtmG/frontend-manage-page"}
          liveLink={"https://aayushtmG.github.io/frontend-manage-page/"}
        />
        <WorkBlock
          backgroundImg={tipcalculator}
          title={"Tip Calculator"}
          skills={["html", "css", "js"]}
          repoLink={"https://github.com/aayushtmG/frontEndMentor-tipCalculator"}
          liveLink={"https://aayushtmG.github.io/frontEndMentor-tipCalculator/"}
        />
        <WorkBlock
          backgroundImg={todo}
          title={"To Do App"}
          skills={["html", "css", "js"]}
          repoLink={"https://github.com/aayushtmG/todo"}
          liveLink={"https://aayushtmG.github.io/todo/"}
        />
        <WorkBlock
          backgroundImg={FlashC}
          title={"Flash Card"}
          skills={["html", "css", "js", "nextjs", "mongodb", "express"]}
          repoLink={"https://github.com/aayushtmG/flashC"}
          liveLink={"https://aayushtmG.github.io/tictactoe/"}
        />
        <WorkBlock
          backgroundImg={FakeStore}
          title={"Fake Store Ecommerce"}
          skills={["html", "css", "js", "react"]}
          repoLink={"https://github.com/aayushtmG/FakeStore"}
          liveLink={"https://fakestore-aayush.netlify.app/"}
        />
        <WorkBlock
          backgroundImg={NarutoGame}
          title={"Naruto Memory Game"}
          skills={["html", "css", "js", "react"]}
          repoLink={"https://github.com/aayushtmG/Naruto-memory-game"}
          liveLink={"https://naruto-memorygame.netlify.app"}
        />
      </div>
    </div>
  )
}

export default Portfolio
