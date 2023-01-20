/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Banner from '../components/banner';
import Event from '../components/Event';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import Mentors from '../components/Mentors';
import Navbar from '../components/Navbar';
import Reward from '../components/Reward';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="description" content="Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-khula max-w-6xl w-full mx-auto pt-8 ">
        {/* NAVBAR */}
        <Navbar />
        {/* SECTION - BANNER */}
        <Banner />
        {/* SECTION EVENT */}
        <Event />
        {/* SECTION REWARD */}
        <Reward />
        {/* SECTION MENTORS */}
        <Mentors />
        {/* SECTION FAQs */}
        <Faqs />
        <br />
        <hr />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
