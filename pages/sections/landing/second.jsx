import Link from "next/link";
import React from "react";
import Image from "next/image";

const Second = () => {
  return (
    <section
      id='about'
      data-testid='about'
      className='flex flex-col justify-end 2xl:container'
    >
      <div className='min-h-[7rem]'></div>
      <div className='flex flex-col cont-height justify-center gap-y-20 sm:gap-y-28 lmd:px-10 2xl:px-4 box-border'>
        <div className='flex flex-wrap justify-center gap-y-6 gap-x-6 '>
          <div className='flex flex-col gap-y-8 lmd:w-[45%] px-6 box-border md:pb-8 lg:pb-0'>
            <div className='flex flex-col gap-y-6'>
              <h2 className='text-3xl font-bold text-gray-700 md:text-4xl lg:text-5xl lmd:max-w-lg'>
                Everything with a view.
              </h2>
              <p className='lg:text-lg'>
                Kalurahan Sidoharjo sangatlah dekat dengan alam. Lokasinya yang
                terletak di kawasan Pegunungan Menoreh menjadikan objek-objek
                wisata di Kalurahan Sidoharjo memiliki latar belakang
                pemandangan yang indah.
              </p>
            </div>
            <div className='flex gap-x-4'>
              <Link
                href='/gallery'
                className='px-4 py-[0.6rem] lmd:py-3 lmd:px-6 bg-gray-700 text-gray-100 hover:bg-gray-800 transition-all duration-300'
              >
                Lihat galeri
              </Link>
              <Link
                href=''
                className='px-4 py-[0.6rem] lmd:py-3 lmd:px-6 border-[1px] border-gray-400 hover:border-gray-800 border-opacity-40 hover:border-opacity-100 transition-all duration-200'
              >
                Lihat destinasi
              </Link>
            </div>
          </div>
          {/* image */}
          <div className='w-full lmd:w-[45%] px-6 box-border'>
            <div className="bg-[url('/IMG_0287.jpg')] h-[20rem] w-full bg-cover bg-center shadow-2xl lmd:h-3/4 lg:h-[90%] relative">
              <div className='absolute -bottom-4 -right-4 shadow-2xl border-8 border-gray-200 md:hidden'>
                <Image src='/IMG_0151.jpg' alt='' width={200} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
