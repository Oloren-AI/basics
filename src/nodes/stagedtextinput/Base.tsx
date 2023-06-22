import { NodeProps } from "@oloren/core";
import React from "react";
import { Typography, Input } from "antd";

export type TextInputData = {
  name: string;
  placeholder: string;
};

function Base({node, setNode}: NodeProps<TextInputData>) {

  const data = node.data as TextInputData;

  return (
    <div>
      <Typography.Text tw="font-bold">Staged Text Input</Typography.Text>
      <Input
        tw="w-full"
        addonBefore={"Name"}
        value={data.name}
        onChange={(e) => {
          setNode((node) => ({
            ...node,
            data: {
              ...node.data,
              name: e.target.value,
            },
          }));
        }}
      />
      <Input
        tw="w-full"
        addonBefore={"Placeholder"}
        value={data.placeholder}
        onChange={(e) => {
          setNode((node) => ({
            ...node,
            data: {
              ...node.data,
              placeholder: e.target.value,
            },
          }));
        }
        }
      />
    </div>
  );
}

export default Base;
