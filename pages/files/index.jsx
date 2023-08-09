import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/components/filecard";

const FilePage = () => {
  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-evenly gap-4 pt-24 p-8 bg-gray-800'>
        <div className='text-4xl font-bold text-left text-white py-2 md:py-8 md:pt-12 px-4 rounded'>
          Dokumen
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:pb-24'>
          <Card
            title='PDF contoh'
            file='example.pdf'
            description='This is the description for Card 1.'
          />
          <Card
            title='PDF contoh 2'
            file='example2.pdf'
            description='This is the description for Card 2.'
          />
          <Card
            title='Booklet Pariwisata'
            file='https://sidoharjofiles.s3.ap-southeast-1.amazonaws.com/kkn_booklet%5B1%5D.pdf'
            description='Objek pariwisata di Kalurahan Sidoharjo.'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FilePage;
