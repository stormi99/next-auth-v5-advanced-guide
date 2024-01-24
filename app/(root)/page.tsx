import { Montserrat } from "next/font/google";

import { Rubik } from "next/font/google";

import { Button } from "@/components/ui/button";

import { YoutubeVideo } from "@/components/our-ui/dinevate-landing/youtube-video";
import Image from "next/image";
import TopicSeperator from "@/components/our-ui/dinevate-landing/topic-seperator";

import EnterIcon from "@/components/ui/enter-icon";
import { Video } from "@/components/our-ui/dinevate-landing/video";
import ListTickIcon from "@/components/ui/list-tick-icon";
import ChangingFoodName from "@/components/our-ui/dinevate-landing/changing-food-name";
import FakeSearchBar from "@/components/our-ui/dinevate-landing/fake-search-bar";
import Nav from "@/components/our-ui/dinevate-landing/nav";
import Footer from "@/components/our-ui/dinevate-landing/footer";

const font = Montserrat({
  subsets: ["latin"],
});

const fontHeader = Rubik({
  subsets: ["latin"],
});

export default function Home() {
  const keyFeaturesMerchantApp = [
    "Manage orders from different food order apps like Dinevate, Doordash, Grubhub and UberEats.",
    "View customer order history and details.",
    "Build and maintain a database of your customers. Recognize loyal patrons, manage feedback, and drive repeat business.",
    "Get insights on popular dishes, peak order times, and other information. Make informed decisions to boost your sales.",
  ];

  const logos = [
    "/dinevate-site/doordash-logo.svg",
    "/dinevate-site/ubereats-logo.svg",
    "/dinevate-site/grubhub-logo.svg",
  ];

  const keyFeaturesOnlineOrderSystem = [
    "Get your own website and online ordering system for your restaurant.",
    "Get more orders online and increase your revenue.",
    "Get your own online ordering system for your restaurant.",
    "Get more orders online and increase your revenue.",
  ];

  return (
    <div className={font.className}>
      <Nav />

      {/* HERO */}

      <section className="dinevate-section-hero-background h-[50rem] bg-cover bg-center">
        <div className="text-white flex flex-col justify-center items-center p-10 text-center">
          <h1 className="mt-[1rem] text-[2.4rem] uppercase">
            Fast & finest online order solution for restaurants.
          </h1>
          <h2 className="mt-10 text-[1.3rem] ">
            Starting only from $0 / month*
          </h2>
          <Button
            variant="cta"
            size="lg"
            className="mt-[6rem] px-8 py-10 w-full flex border-0 gap-x-4 justify-center items-center"
          >
            {/* <EnterIcon className="w-6 h-6" /> */}
            <span className="uppercase tracking-wider text-lg text-wrap">
              CHECK HOW MUCH
              <br /> YOU CAN SAVE
            </span>
            <EnterIcon className="w-6 h-6" />
          </Button>
          <span className="text-xs mt-[2rem]">
            24/7 SUPPORT & QUIT ANYTIME & NEWEST TECHNOLOGY
          </span>
        </div>
      </section>

      <section className="bg-stone-100 p-10">
        <TopicSeperator
          number={1}
          header="Why Dinevate?"
          textColor="text-stone-800"
          divColor="bg-stone-800"
          fontClassName={fontHeader.className}
        />

        <h2
          className={` text-stone-800 uppercase text-4xl mb-[1rem] tracking-[2px] ${fontHeader.className} font-bold`}
        >
          Why Dinevate?
        </h2>

        <p className="text-stone-800 mb-[1.5rem] tracking-wider">
          Dinevate is a platform that helps restaurants to get their own online
          ordering system. It helps restaurants to get more orders online and
          increase their revenue.
        </p>

        <p className="text-stone-800 mb-[2rem] tracking-wider">
          After getting your own website and ordering system, we help you on
          your marketing and advertising to get more orders.
        </p>

        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-stone-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-xl italic font-medium text-stone-800 dark:text-white">
              &quot;After partnering with Dinevate, our online sales
              significantly increased and we are happier than ever.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <Image
              src="/dinevate-site/troy-pizza-owner.jpg"
              width={35}
              height={35}
              alt="Troy's Pizza Owner"
              className="rounded-full"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Dogan D.
              </cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Owner, Troy&quot;s Pizza Newark, DE
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>

      <section className="bg-stone-900 p-10">
        <TopicSeperator
          number={2}
          header="Dinevate Order Manager"
          fontClassName={fontHeader.className}
        />

        <h2
          className={` text-white uppercase text-4xl mb-[1rem] tracking-[2px] ${fontHeader.className} font-bold`}
        >
          THE APP
        </h2>

        <p className="text-stone-300 mb-[1.5rem] tracking-wider">
          Dinevate Order Manager App is an application that helps restaurants to
          manage their online orders. It helps restaurants to get more orders
          online and increase their revenue.
        </p>

        {/* List of its features */}
        <ul className="text-stone-300 mb-[1.5rem] tracking-wider space-y-4 text-left  dark:text-gray-400">
          {keyFeaturesMerchantApp.map((feature, i) => (
            <li
              key={i}
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <ListTickIcon className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Image
          src="/dinevate-site/dinevate-merchant-app.png"
          alt="Dinevate Order Manager app showing orders from different food order apps like Dinevate, Doordash, Grubhub and UberEats. They users are able to see the orders from different providers on the same tablet."
          // Animation hover effect zoom out
          className="hover:scale-105 transition-all duration-500 ease-in-out mt-[2rem]"
          width={500}
          height={500}
        />

        <div className="mt-[2rem] grid grid-cols-2 gap-10 place-content-center place-items-center">
          {logos.map((logo, i) => (
            <div className="flex justify-center items-center" key={i}>
              <Image
                src={logo}
                alt="Dinevate Order Manager app showing orders from different food order apps like Dinevate, Doordash, Grubhub and UberEats. They users are able to see the orders from different providers on the same tablet."
                className="hover:scale-105 transition-all duration-500 ease-in-out"
                width={150}
                height={150}
              />
            </div>
          ))}
          <div className="flex gap-2 justify-center items-center hover:scale-105 transition-all duration-500 ease-in-out">
            <Image
              src="/dinevate-site/dinevate-brown-logo.svg"
              height={30}
              width={30}
              alt="Dinevate logo"
            />
            <span
              className={`text-stone-300 ${font.className} uppercase text-lg tracking-[2px]`}
            >
              Dinevate
            </span>
          </div>
        </div>
        <span className="text-stone-300 tracking-wider italic flex justify-center mt-[2rem]">
          and more supported platforms...
        </span>
      </section>

      <section className="bg-white p-10">
        <TopicSeperator
          number={3}
          header="ONLINE ORDER SYSTEM FOR RESTAURANTS"
          fontClassName={fontHeader.className}
          divColor="bg-emerald-800"
          textColor="text-emerald-800"
        />

        <h2
          className={`text-emerald-800 uppercase text-4xl mb-[1rem] tracking-[2px] ${fontHeader.className} font-bold`}
        >
          THE ACTION
        </h2>

        <p className="text-stone-800 mb-[1.5rem] tracking-wider">
          Dinevate&apos;s online ordering system for restaurants is a platform
          that helps restaurants to get their own online ordering system.
          <br />
          <br />
          It helps restaurants to get more orders online and increase their
          revenue.
        </p>

        <h2 className="text-stone-800 mb-[1.5rem] tracking-wider font-bold">
          Our Resturant (Diner, Cafe, Pizzeria) Online Food Order System Enables
          You:
        </h2>

        <ul>
          {keyFeaturesOnlineOrderSystem.map((feature, i) => (
            <li
              key={i}
              className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-[1rem]"
            >
              <ListTickIcon className="flex-shrink-0 w-3.5 h-3.5 text-emerald-800" />
              <span className="text-stone-800 tracking-wider">{feature}</span>
            </li>
          ))}
        </ul>

        <Video />
      </section>

      <section className="bg-amber-700 p-10">
        <TopicSeperator
          number={4}
          header="MARKETING & ADVERTISING"
          fontClassName={fontHeader.className}
          divColor="bg-white"
          textColor="text-white"
        />

        {/* Google style search bar */}
        <FakeSearchBar>
          <h2
            className={`text-black uppercase text-2x tracking-[2px] ${fontHeader.className} font-bold`}
          >
            BEST <ChangingFoodName /> NEAR ME
          </h2>
        </FakeSearchBar>
        <span className="text-white text-xs">
          Your customers will search for these*
        </span>

        <p className="text-white my-[1.5rem] tracking-wider">
          Dinevate&apos;s online ordering system for restaurants is a platform
          that helps restaurants to get their own online ordering system.
          <br />
          <br />
          It helps restaurants to get more orders online and increase their
          revenue.
        </p>
      </section>

      <Footer />
    </div>
  );
}
