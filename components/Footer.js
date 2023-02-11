const style = {
  wrapper: "p-8 text-center bg-titleColor",
  title: "text-white",
};

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Copyright &copy; 2022 Aayush Tamang</h1>
    </div>
  );
};

export default Footer;
