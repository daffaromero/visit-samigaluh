import React from "react";
import Header from "@/components/header";
import Posts from "@/components/posts";
import Footer from "@/components/footer";

export default function Index() {
  return (
    <div className='w-full bg-slate-500'>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
