import Head from "next/head";
import Homepage from "./sections/landing/home";
import Second from "./sections/landing/second";
import Pic from "./sections/landing/pic";
import Footer from "@/components/footer";

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
        <Footer />
      </div>
    </>
  );
}
