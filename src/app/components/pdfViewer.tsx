"use client";

import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};
const maxWidth = 800;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: { numPages: number }): void {
    setNumPages(nextNumPages);
  }

  const goToPreviousPage = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setPageNumber((prevPage) => (prevPage < numPages ? prevPage + 1 : prevPage));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">

      <div className="shadow-lg p-4 w-full max-w-2xl z-10 bg-white rounded-lg" ref={setContainerRef}>
        <div className="relative" style={{ minHeight: "600px" }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
              <p className="text-gray-500">Chargement...</p>
            </div>
          )}
          <Document 
            file="files/guide.pdf" 
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page
              pageNumber={pageNumber}
              width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              onRenderSuccess={() => setIsLoading(false)}
            />
          </Document>
        </div>
        <p className="mt-2 text-black text-lg font-semibold text-center">
          Page {pageNumber} sur {numPages}
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
          >
            Précédente
          </button>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
          >
            Suivante
          </button>
        </div>
      </div>
    </div>
  );
}