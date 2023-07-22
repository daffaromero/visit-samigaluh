import Head from "next/head";
import Homepage from "./sections/landing/home";
import Second from "./sections/landing/second";
import Pic from "./sections/landing/pic";
// import Testi from "./sections/landing/testi";
import Footer from "@/components/footer";
import Destinations from "@/components/dest";

export default function Home() {
  return (
    <>
      <div>
        {/* Home */}
        <Homepage />
        {/* section 2 */}
        <Second />
        {/* section 3 */}
        <Pic />
        <Destinations />
        {/* section 4 */}
        {/* <Testi /> */}
        {/* <Reviewpage /> */}
        <Footer />
      </div>
    </>
  );
}
