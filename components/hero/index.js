import HeroImage from "./HeroImage"
import IntroSection from "./IntroSection"
const style = {
  wrapper:
    "container p-6  flex flex-col-reverse justify-center  md:flex-row items-center h-screen ",
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <IntroSection />
      <HeroImage />
    </div>
  )
}

export default Hero
