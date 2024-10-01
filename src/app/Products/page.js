import React from "react";
import img1 from "../Assets/window.png";
import img2 from "../Assets/variable.webp";
import img3 from "../Assets/ducted.jpg";
import img4 from "../Assets/roof.jpg";
import img5 from "../Assets/air.avif";
import One from "../components/One";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
const data = [
{
    img: img1,
    title: "Window & Duct-Free Split Systems",
    info: `Whether you require a window room air conditioner, wall, cassette, or a floor-standing model, Carrier's range of
versatile residential units is easy to install, operate quietly, and offer years of trouble-free operation.
We offer a range of Fixed-speed and Inverter Duct-Free Systems from China, Egypt, and South Korea that are energy efficient,
meet the latest regulations,and are designed to suit your needs.`,
},
{
    img: img2,
    title: "Variable Refrigerant Flow system",
    info: `Innovation is at Carrier’s core. Carrier’s
variable refrigerant flow (VRF) XPower
technology circulates the minimum amount
of refrigerant needed for each individual
zone to satisfy building load. Since there
are no ducts, this eliminates the energy
waste associated with the duct loss. A
single outdoor VRF condenser can power up
to 64 independent indoor units, depending
on the system. Carrier offers XPower VRF
solutions with the mini VRF capacity
ranging from 4HP to 6HP and top discharge
VRF ranging from 8HP to 20HP having a
combination of up to 56HP.`,
},
{
    img: img3,
    title: "Ducted systems",
    info: `With Carrier inverters and fixed speed ducted
systems, a wide range of outdoor air
conditioners work seamlessly with innovative
indoor fan coil units to create reliable
solutions that are easy to install and service
for a wide range of residential HVAC needs`,
},
{
    img: img4,
    title: "Rooftops",
    info: `Carrier’s rooftop units are specially designed
to provide a compact yet efficient cooling
and ventilation solution. Self-contained and
easy to maintain, our units are available in a
wide range of capacities to meet your
facility’s requirements. Rooftop units are the
ideal choice for commercial or industrial
facilities where internal space may be at a
premium. These products heat, cool, and
ventilate the building’s interior using a
network of ventilation shafts. Carrier’s latest
generation of units is lightweight and low-noise. It is perfect for use in today’s building
structures with minimal noise output.`,
},
{
    img: img5,
    title: "Air Curtains units & Air Purifiers",
    info: `Carrier’s rooftop units are specially designed
to provide a compact yet efficient cooling
and ventilation solution. Self-contained and
easy to maintain, our units are available in a
wide range of capacities to meet your
facility’s requirements. Rooftop units are the
ideal choice for commercial or industrial
facilities where internal space may be at a
premium. These products heat, cool, and
ventilate the building’s interior using a
network of ventilation shafts. Carrier’s latest
generation of units is lightweight and low-noise. It is perfect for use in today’s building
structures with minimal noise output.`,
},
];
return (
<>
    <Header />
    <main className="container">
    {data?.map((one) => (
        <One data={one} key={data.info} />
    ))}
    </main>
    <Footer />
</>
);
};

export default page;
