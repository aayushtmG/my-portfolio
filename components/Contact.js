import { MdPhoneIphone, MdLocationPin } from "react-icons/md";

const style = {
  wrapper: "h-screen container grid place-items-center ",
  innerWrapper: "w-full ",
  title:
    " text-4xl font-bold mb-4 underline tracking-wider text-titleDark decoration-2 text-center underline-offset-4 ",
  contact:
    " 2xl:text-xl hover:animate-pulse text-textColor flex items-center w-fit mx-auto gap-2 hover:text-titleColor cursor-pointer",
  titleWrapper: "w-4/5 mx-auto flex-col  ",
  titleDescription: " text-center text-textColor 2xl:text-xl  ",
  formWrapper: " w-4/5 mx-auto max-w-[500px]",
  form: " flex flex-col my-10 space-y-2 text-slate-400 ",
  submitBtn:
    "mtracking-wider bg-titleColor text-slate-300  md:py-2 py-1.5 px-4  font-bold  rounded-lg lg:hover:bg-transparent lg:hover:text-titleColor  border transition-color duration-500 ease-out lg:hover:border-titleColor w-fit mx-auto mt-10",
};

const Contact = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <div className={style.titleWrapper}>
          <h1 className={style.title}>Contact</h1>
          <p className={style.titleDescription}>Get in touch with me </p>
          <p className={style.contact}>
            <MdPhoneIphone className="w-5 h-5 font-bolder " />
            +977 9815285430
          </p>
          <p className={style.contact}>
            <MdLocationPin className="w-5 h-5 font-bolder " />
            Chitwan, Nepal
          </p>
        </div>
        <div className={style.formWrapper}>
          <form className={style.form}>
            <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-1 ">
              <input
                type="text"
                placeholder="Name"
                className=" lg:w-1/2"
                required
              />
              <input
                type="email"
                placeholder="emailid@email.com"
                className="lg:w-1/2"
                required
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <input type="text" maxLength={10} placeholder="Phone number" />
              <textarea
                placeholder="Message"
                className="bg-titleColor outline-none p-5 rounded-lg "
                required
              ></textarea>
            </div>
            <button type="submit" className={style.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
