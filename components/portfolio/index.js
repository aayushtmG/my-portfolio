import WorkBlock from "./WorkBlock";
import tictactoe from "../../public/portfolio/tictactoe.png";
import tailwindPage from "../../public/portfolio/tailwindPage.png";
import tipcalculator from "../../public/portfolio/tipcalculator.png";
import todo from "../../public/portfolio/todo.png";

const style = {
  wrapper: "my-16 container h-screen py-20",
  title:
    "tracking-wider text-4xl font-bold underline underline-titleColor text-titleDark decoration-2 text-center underline-offset-4 lg:text-left ",
  titleWrapper: "w-4/5 mx-auto",
  titleDescription: "hidden lg:block text-textColor  pt-2",
  blockWrapper: "py-5 grid gap-4 w-4/5 mx-auto md:grid-cols-2  ",
};
const Portfolio = () => {
  return (
    <div className={style.wrapper} id="portfolioSection">
      <div className={style.titleWrapper}>
        <h1 className={style.title}>Portfolio</h1>
        <h2 className={style.titleDescription}>My Works</h2>
      </div>
      <div className={style.blockWrapper}>
        <WorkBlock
          backgroundImg={tictactoe}
          title={"tic-tac-toe"}
          skills={["html", "css", "js"]}
          repoLink={"https://github.com/iceTmZz/tictactoe"}
          liveLink={"https://icetmzz.github.io/tictactoe/"}
        />
        <WorkBlock
          backgroundImg={tailwindPage}
          title={"Tailwind Page"}
          skills={["html", "css", "tailwind"]}
          repoLink={"https://github.com/iceTmZz/frontend-manage-page"}
          liveLink={"https://icetmzz.github.io/frontend-manage-page/"}
        />
        <WorkBlock
          backgroundImg={tipcalculator}
          title={"Tip Calculator"}
          skills={["html", "css", "js"]}
          repoLink={"https://github.com/iceTmZz/frontEndMentor-tipCalculator"}
          liveLink={"https://icetmzz.github.io/frontEndMentor-tipCalculator/"}
        />
        <WorkBlock
          backgroundImg={todo}
          title={"To Do App"}
          skills={["html", "css", "js"]}
          repoLink={"https://github.com/iceTmZz/todo"}
          liveLink={"https://icetmzz.github.io/todo/"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
