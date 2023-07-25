/**
 * This demonstrates the use of "done" functionality and also shows how we can use "hidden" applets
 * to execute some bare minimum backend-like code on the frontend.
 */

import { CheckCircleOutlined } from "@ant-design/icons";
import { ApplicationProps } from "@oloren/core";
import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Applet({
  inputs,
  outputs,
  node,
  setOutputs,
}: ApplicationProps<number, [{ url: string }], [number[]]>) {
  useEffect(() => {
    setOutputs([[1]]);
  }, []);

  const [numPages, setNumPages] = React.useState<number | null>(null);

  const selected = outputs ? outputs[0] : [];
  const setSelected = (x: number[]) => {
    setOutputs([x]);
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      tw="h-fit w-full flex flex-col items-center justify-end overflow-x-auto"
      id="ignorechild"
    >
      <Document
        file={inputs[0].url}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
        }}
      >
        <div
          tw="flex flex-row space-x-2 overflow-x-auto"
          style={{ width: ref?.current?.clientWidth ?? "100%" }}
        >
          {numPages
            ? [...Array(numPages)].map((_, i) => (
                <div
                  tw="w-fit h-fit relative cursor-pointer"
                  key={i}
                  onClick={() => {
                    if (selected.includes(i + 1)) {
                      setSelected(selected.filter((x) => x !== i + 1));
                    } else {
                      if (node.data !== 0 && selected.length >= node.data) {
                        message.error(
                          `You can only select ${node.data} pages.`
                        );
                      } else setSelected([...selected, i + 1]);
                    }
                  }}
                >
                  <Page
                    pageNumber={i + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    scale={0.3}
                  />
                  {selected.includes(i + 1) ? (
                    <div
                      id="overlay"
                      tw="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 bg-opacity-25 grid place-items-center"
                    >
                      <CheckCircleOutlined tw="text-4xl text-blue-500" />
                    </div>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </Document>
    </div>
  );
}

export default Applet;
