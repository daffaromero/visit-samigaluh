import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PDFViewer = dynamic(() => import("@/components/pdf"), { ssr: false });

const FilePage = ({ file }) => {
  return (
    <>
      <Header />
      <PDFViewer file={`/${file}`} />
      <Footer />
    </>
  );
};

export default FilePage;

// This function runs on the server and provides the "file" prop to the component
export async function getServerSideProps({ query }) {
  const { file } = query;
  return {
    props: {
      file: file,
    },
  };
}
