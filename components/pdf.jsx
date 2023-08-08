"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Import CSS for annotation layer

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFLoader({ file }) {
  const [selectedFile, setFile] = useState("./example.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onFileChange(event) {
    setFile(event.target.files[0]);
    setPageNumber(1); // Reset page number when a new file is selected
  }

  const goToPrevPage = () => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber - 1 <= 1 ? 1 : prevPageNumber - 1
    );
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber + 1 >= numPages ? numPages : prevPageNumber + 1
    );
  };

  return (
    <div className='min-h-screen bg-slate-700 flex flex-col items-center justify-center pt-32 pb-16'>
      <div className='pdf-container p-4 bg-white shadow-lg rounded-lg'>
        <nav className='mb-4 flex items-center'>
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className={`px-4 py-2 mr-4 bg-blue-500 text-white rounded transition-all duration-300 ${
              pageNumber <= 1
                ? "opacity-50 cursor-default"
                : "hover:bg-blue-600 active:bg-blue-700 transform scale-105 active:scale-100"
            }`}
          >
            Prev
          </button>
          <p className='text-xl'>
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className={`px-4 py-2 ml-4 bg-blue-500 text-white rounded transition-all duration-300 ${
              pageNumber >= numPages
                ? "opacity-50 cursor-default"
                : "hover:bg-blue-600 active:bg-blue-700 transform scale-105 active:scale-100"
            }`}
          >
            Next
          </button>
        </nav>

        <div className='pdf-content'>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>

      {/* <input type='file' onChange={onFileChange} className='mt-4' /> */}
    </div>
  );
}
