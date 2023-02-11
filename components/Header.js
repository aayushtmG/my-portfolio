import Link from "next/link";
import { useEffect, useState } from "react";

const style = {
  wrapper:
    " py-3 px-2 flex justify-between items-center  absolute w-full lg:px-10 xl:px-20 mx-auto",
  btn: "  bg-titleColor text-white md:py-2 lg:px-3 py-1.5 px-2 text-[0.7rem] md:text-sm font-bold  rounded-xl lg:hover:bg-transparent lg:hover:text-titleColor  border transition-color duration-500 ease-out lg:hover:border-titleColor",
  logo: "text-titleColor  text-2xl font-lob",
};

const Header = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.logo}>&#123; Tamang &#125;</h1>
      <Link href={"#contact-section"}>
        <button className={style.btn}>Contact me</button>
      </Link>
    </div>
  );
};

export default Header;
