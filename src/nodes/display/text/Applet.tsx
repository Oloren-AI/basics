/**
 * This demonstrates the use of "done" functionality and also shows how we can use "hidden" applets
 * to execute some bare minimum backend-like code on the frontend.
 */

import React from "react";
import { ApplicationProps } from "@oloren/core";
import { useEffect } from "react";
import { Button, Typography } from "antd";
import { CopyOutlined } from "@ant-design/icons";

function Applet({
  node,
  inputs,
  outputs,
  setOutputs,
  done,
}: ApplicationProps<string, [string], [string]>) {
  useEffect(() => {
    setOutputs(["done"]);
  }, []);

  return (
    <div tw="flex flex-col space-y-2">
      <Button
        icon={<CopyOutlined />}
        tw="w-full"
        onClick={() => {
          navigator.clipboard
            .writeText(inputs[0])
            .then(() => {
              console.log("Text copied to clipboard:", inputs[0]);
            })
            .catch((error) => {
              console.error("Failed to copy text to clipboard:", error);
            });
        }}
      >
        Copy Text
      </Button>
      <Typography.Text tw="whitespace-pre-line">{inputs[0]}</Typography.Text>
    </div>
  );
}

export default Applet;
