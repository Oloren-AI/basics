/**
 * This demonstrates the use of "done" functionality and also shows how we can use "hidden" applets
 * to execute some bare minimum backend-like code on the frontend.
 */

import { DownloadOutlined } from "@ant-design/icons";
import { ApplicationProps, Json } from "@oloren/core";
import { Button } from "antd";
import React, { useEffect } from "react";

import { NodeData } from "./Base"

function Applet({
  node,
  inputs,
  setOutputs,
  download,
}: ApplicationProps<NodeData, [{ url: string }, string], [string]>) {
  useEffect(() => {
    setOutputs(["done"]);
  }, []);

  return (
    <div tw="w-full">
      <Button
        tw="w-full"
        icon={<DownloadOutlined />}
        onClick={() => {
          download(inputs[0].url, inputs[1]);
        }}
      >
        {`Download File (${inputs[1]})`}
      </Button>
    </div>
  );
}

export default Applet;
