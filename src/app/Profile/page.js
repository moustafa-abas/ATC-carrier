import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import profile from "../Assets/profile.webp";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const page = () => {
return (
<>
    <Header />
    <Image src={profile} alt="" height={500} className="w-full h-96" />

    <div className="container">
    <h1 className="text-center my-8 text-5xl capitalize">
        <span className="uppercase text-blue-900 font-semibold"> atc </span>{" "}
        profile
    </h1>

    <h3 className="leading-7 tracking-wide mb-10">
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

    <a
        href="https://drive.google.com/file/d/1O1WdAv5iTIdXBVKCfhlHaNT5iLqF94CP/view?usp=drive_link"
        download="ATC-profile.pdf"
        target="_blank"
        className=" capitalize mt-5 text-xl sm:text-3xl font-semibold  flex items-center  mx-auto gap-1 bg-blue-900 w-fit pr-3 text-white"
    >
        <span className="bg-gray-600 p-3">
        <FontAwesomeIcon icon={faDownload} />
        </span>{" "}
        download ATC profile
    </a>
    </div>
    <Footer />
</>
);
};

export default page;
