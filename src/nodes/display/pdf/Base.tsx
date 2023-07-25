import { NodeProps } from "@oloren/core";
import React, { useEffect } from "react";
import { InputNumber, Typography } from "antd";

function Base({ node, setNode }: NodeProps<number>) {
  useEffect(() => {
    // check if node.data is object
    if (typeof node.data !== "number") {
      setNode((node) => ({
        ...node,
        data: 0,
      }));
    }
  }, []);

  const data = node.data as number;

  return (
    <div>
      <Typography.Text>Select PDF Pages</Typography.Text>
      <InputNumber
        addonBefore="Maximum Pages"
        value={data === 0 ? undefined : data}
        min={1}
        onChange={(e) => {
          if (e)
            setNode((node) => ({
              ...node,
              data: e,
            }));
        }}
      />
    </div>
  );
}

export default Base;
