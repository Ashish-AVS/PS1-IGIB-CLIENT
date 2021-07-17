import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { DownloadOutlined } from '@ant-design/icons';

import { Button } from "antd";

export default function Summary({ match }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Document
        file={`http://127.0.0.1:5000/report/${match.params.id}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </div>
        <div className="buttonc"
          style={{
            position: "relative",
            bottom: "70%",
            left: "67%",
            width: "33%"
          }}
        >
          <Button type="primary"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous Page
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="primary"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next Page
          </Button>
        </div>
      </div>
      <br />
      <div 
      style={{
            position: "relative",
            bottom: "0%",
            left: "69.5%",
            width: "16%",
          }}>
        <a href={`https://eb-ps1-api.herokuapp.com/report/${match.params.id}`}>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
            Download Report
          </Button>
        </a>
      </div>
    </div>
  );
}
// Font size, pdf, button, index(to toggle)
