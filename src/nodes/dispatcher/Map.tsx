import { NodeProps } from "@oloren/core";
import React from "react";
import { Input, InputNumber, Typography } from "antd";

type MapData = {
  batch_size: number;
  depth: number;
};

function Base({ node, setNode }: NodeProps<MapData>) {
  const data = node.data as MapData;
  return (
    <div tw="flex flex-col space-y-2">
      <Typography.Text tw="font-bold">Map</Typography.Text>
      <Typography.Text>
        The first input a list of data; the second input is the function.
      </Typography.Text>
      <InputNumber
        addonBefore={"Batch Size"}
        value={data.batch_size}
        onChange={(e) => {
          if (e) setNode({ ...node, data: { ...data, batch_size: e } });
        }}
      />
      <InputNumber
        addonBefore={"Depth"}
        value={data.depth}
        onChange={(e) => {
          if (e) setNode({ ...node, data: { ...data, depth: e } });
        }}
      />
    </div>
  );
}

export default Base;
