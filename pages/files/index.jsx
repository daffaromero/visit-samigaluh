import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/components/filecard";

const FilePage = () => {
  return (
    <>
      <Header />
      <div className='flex flex-wrap justify-center items-center gap-4 pt-24 p-8'>
        <Card title='Card 1' file='example.pdf' />
        <Card title='Card 2' file='example2.pdf' />
        <Card title='Card 3' file='example3.pdf' />
      </div>
      <Footer />
    </>
  );
};

export default FilePage;
