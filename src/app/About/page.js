import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      <Header />
      <div className="about container">
        <h1 className=" text-center capitalize text-blue-800 font-medium text-5xl mt-10">
          about us
        </h1>
        <h2 className=" text-2xl text-center my-5">ATC Air-conditioning </h2>

        <h3 className="leading-7 tracking-wide">
          ATC, established in 2018, brings over 23 years of experience in
          providing and installing solutions for HVAC (Heating, Ventilation, and
          Air Conditioning) systems. ATC has gained a reputation as a trusted
          distributor for Carrier, a leading brand in the HVAC industry.
          <br />
          With a focus on reliability, quality, and innovation, ATC offers a
          comprehensive range of HVAC solutions tailored to meet the diverse
          needs of its clientele. Whether it's designing systems for large
          commercial complexes, ensuring optimal indoor climate control for
          residential properties, or meeting the stringent requirements of
          governmental projects, ATC is committed to delivering excellence in
          every aspect of its services <br />
          Backed by a team of seasoned professionals and a deep understanding of
          the industry, ATC strives to exceed customer expectations by providing
          efficient, cost-effective, and sustainable HVAC solutions. From system
          design and installation to maintenance and support, ATC is dedicated
          to ensuring client satisfaction and fostering long-term partnerships
          built on trust and reliability.
        </h3>

        <Table />
      </div>
      <Footer />
    </>
  );
};

export default Page;
