import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className=" mt-20   flex bg-blue-900 py-5 text-white flex-col-reverse sm:flex-row   sm:flex-wrap-reverse lg:flex-nowrap">
      <section className="lg:w-1/4  w-full capitalize  sm:border-t-2 sm:mt-8 sm:pt-3 border-gray-400 px-4 py-4 sm:py-0 lg:mt-0 lg:pt-0 lg:border-t-0 lg:border-r-2">
        <h1 className="font-semibold text-3xl mb-7 ">contact us</h1>
        <div className="flex items-center gap-4 font-medium text-lg  my-5 ">
          {" "}
          <FontAwesomeIcon icon={faPhone} className="text-2xl" />
          <h2 className="">+971 50 435 9237</h2>{" "}
        </div>
        <div className="flex items-center gap-4 font-medium text-lg  my-5 ">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          <h2 className="">gala.mohamed@carrier-atc.ae</h2>{" "}
        </div>
      </section>

      <section className="sm:w-1/3 lg:w-1/4 w-full capitalize border-b-2 sm:border-b-0 sm:border-r-2 border-gray-400 px-4 flex gap-5 py-4 sm:py-0">
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="text-5xl mt-7 " />
        </div>
        <div className=" ">
          <h1 className="font-semibold text-3xl mb-7 ">Headquarter</h1>
          <p>bin Kamel Center, Al Wehda St, Industrial 4, Sharjah</p>
        </div>
      </section>
      <section className="sm:w-1/3 lg:w-1/4 w-full capitalize border-b-2 sm:border-b-0 sm:border-r-2 border-gray-400 px-4 flex gap-5 py-4 sm:py-0">
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="text-5xl mt-7 " />
        </div>
        <div className=" ">
          <h1 className="font-semibold text-3xl mb-7 ">Umm Al Quwain</h1>
          <p>Al Khairan Building, King Faisal St, Al Ras 2, Umm Al Quwain</p>
        </div>
      </section>
      <section className=" sm:w-1/3 w-full lg:w-1/4 capitalize border-b-2 sm:border-b-0   px-4 flex gap-5 py-4 sm:py-0 ">
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="text-5xl mt-7 " />
        </div>
        <div className=" ">
          <h1 className="font-semibold text-3xl mb-7 ">Fujairah</h1>
          <p>48CX+WH7 Carrier ATC FUJAIRAH BR - Al Ghaleelah - Fujairah</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
