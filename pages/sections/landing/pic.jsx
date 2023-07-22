import Picard from "@/components/pcard";
import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GET_DESTINATIONS } from "@/lib/query";
import { useQuery } from "@apollo/client";

const Pic = () => {
  const { loading, error, data } = useQuery(GET_DESTINATIONS);
  const scrollContainer = useRef(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { nodes } = data?.destinations || [];

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id='destinations'
      data-testid='destinations'
      className='flex flex-col py-8'
    >
      <div className='min-h-[7.5rem]'></div>
      <div className='relative'>
        <div
          className='px-8 grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%] lg:auto-cols-[30%] gap-0 overflow-x-auto overscroll-y-contain snap-x snap-mandatory scroll-pl-2 scrollbar-hide'
          ref={scrollContainer}
        >
          {nodes.map((node) => {
            const { desc, title, sourceimg, associatedPost } =
              node?.databaseFields || {};
            return (
              <Picard
                key={title}
                src={sourceimg.sourceUrl}
                title={title}
                desc={desc}
                associatedPost={associatedPost}
              />
            );
          })}
        </div>
        <button
          className='p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 left-6'
          onClick={scrollLeft}
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          className='p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 right-6'
          onClick={scrollRight}
        >
          <BsChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Pic;
