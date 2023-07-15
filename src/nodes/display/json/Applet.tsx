/**
 * This demonstrates the use of "done" functionality and also shows how we can use "hidden" applets
 * to execute some bare minimum backend-like code on the frontend.
 */

import { CopyOutlined } from "@ant-design/icons";
import { ApplicationProps, Json } from "@oloren/core";
import { JsonViewer } from "@textea/json-viewer";
import { Button } from "antd";
import React, { useEffect } from "react";

function Applet({
  node,
  inputs,
  outputs,
  setOutputs,
  done,
}: ApplicationProps<string, [Json], [string]>) {
  useEffect(() => {
    setOutputs(["done"]);
  }, []);

  return (
    <div tw="flex flex-col space-y-4 w-full pb-4">
      <div tw="w-full flex flex-row space-x-2">
        <Button
          icon={<CopyOutlined />}
          tw="w-1/2"
          onClick={() => {
            navigator.clipboard
              .writeText(JSON.stringify(inputs[0]))
              .catch((error) => {
                console.error("Failed to copy text to clipboard:", error);
              });
          }}
        >
          Copy Minified JSON
        </Button>
        <Button
          icon={<CopyOutlined />}
          tw="w-1/2"
          onClick={() => {
            navigator.clipboard
              .writeText(JSON.stringify(inputs[0], null, 2))
              .catch((error) => {
                console.error("Failed to copy text to clipboard:", error);
              });
          }}
        >
          Copy Pretty JSON
        </Button>
      </div>

      <JsonViewer
        tw="w-full mb-2"
        value={inputs[0]}
        editable={false}
        displayDataTypes={false}
      />
    </div>
  );
}

export default Applet;
