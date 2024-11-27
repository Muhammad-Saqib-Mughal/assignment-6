import Image from "next/image";
import Navbar from "./components/Navbar";
import First from "./components/First";
import Bottom from "./components/Bottom";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Footer from "./components/Footer";

export default function Home() {
  return(
    <>
    <div className="overflow-x-hidden">

    <Navbar></Navbar>
    <First></First>
    <Bottom></Bottom>
    <Second></Second>
    <Third></Third>
    <Fourth></Fourth>
    <Fifth></Fifth>
    <Sixth></Sixth>
    <Footer></Footer>
    </div>

    </>

  )
}
