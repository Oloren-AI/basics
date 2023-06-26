import { NodeProps } from "@oloren/core";
import React from "react";
import { Input, InputNumber, Typography } from "antd";


function Base({ node, setNode }: NodeProps<any>) {
  return (
    <div tw="flex flex-col space-y-2 h-[256px]">
      <Typography.Text tw="font-bold">Seq</Typography.Text>
      <Typography.Text>
        Seq executes the inputted (Graph, Input) pairs in sequence, returning the output(s) of each Graph(input) operation call as a list.
      </Typography.Text>
    </div>
  );
}

export default Base;
