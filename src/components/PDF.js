import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { Button } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import samplePDF from '../assets/iury-cv.pdf';

const PDF = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <Button
          variant="light"
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          <FiChevronLeft />
        </Button>
        <Button
          variant="light"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <FiChevronRight />
        </Button>
      </div>
    </>
  );
}

export default PDF;