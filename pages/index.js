import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import Head from "next/head";
import InstrumentFeed from "@/components/InstrumentFeed";
import Bruno from "@/components/Bruno";
import Musician from "@/components/Musician";
import Sale from "@/components/Sale";
import Woodwinds from "@/components/Woodwinds";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <Navbar />
        <HomePage />
        <InstrumentFeed />
        <Bruno />
        <Woodwinds />
        <Musician />
        <Sale />
      </div>
    </>
  );
}
