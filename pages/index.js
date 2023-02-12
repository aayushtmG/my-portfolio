import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Skill from "../components/skill";

export default function Home() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth scrollbar scrollbar-track-green-500 scrollbar-thumb-red-500">
      <Head>
        <title>Aayush | Web Developer</title>
        <meta property="og:title" content="Aayush Tamang protfolio website" />
        <meta
          property="og:description"
          content="Aayush Tamang, Aayush Tamang portfolio,portoflio website,aayush portfolio,vercel"
        />

        <meta
          name="keywords"
          content="aayush, tamang ,portfolio,website,vercel, aayush tamang portfolio, aayush tamang vercel, aayush vercel portfolio"
        />
        <meta
          name="google-site-verification"
          content="liD5y8ZgI2ZP4R4cmUjZSHMyAmVIy84wT1UwwkjkltA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <main>
        <section className="snap-start ">
          <Hero />
        </section>
        <section className="snap-start">
          <Skill />
        </section>
        <section className="snap-start ">
          <Portfolio />
        </section>
        <section className="snap-start">
          <Contact />
        </section>
      </main>
      <footer className="snap-start">
        <Footer />
      </footer>
    </div>
  );
}
