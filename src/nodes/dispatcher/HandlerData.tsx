import { NodeProps } from "@oloren/core";
import React, { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Alert, Checkbox, Segmented, Tooltip, Typography } from "antd";
import { WarningTwoTone } from "@ant-design/icons";

type sizes = "S" | "M" | "L";

function Base({
  node,
  setNode,
}: NodeProps<string> & { language?: string; label?: string }) {
  const [size, setSize] = React.useState<sizes>((node.size as sizes) ?? "S");
  const [wrap, setWrap] = React.useState<boolean>(
    node.wrap === undefined ? false : (node.wrap as boolean)
  );

  const [error, setError] = React.useState<boolean>(false);

  useEffect(() => {
    setNode((nd) => ({ ...nd, size: size }));
  }, [size]);

  useEffect(() => {
    setNode((nd) => ({ ...nd, wrap: wrap }));
  }, [wrap]);

  return (
    <div
      tw="bg-gray-100 p-2 border border-gray-300 overflow-auto"
      style={
        size === "S"
          ? { width: "20rem", height: "20rem" }
          : size === "M"
          ? { width: "30rem", height: "30rem" }
          : size === "L"
          ? { width: "40rem", height: "40rem" }
          : { width: "20rem", height: "20rem" }
      }
    >
      <div tw="flex flex-col h-full w-full space-y-2" id="ignorechild">
        <div tw="flex flex-row w-full h-fit justify-between items-center">
          <Typography.Text tw="font-bold">
            Handler Data{" "}
            {error ? (
              <Tooltip title={"Invalid JSON Provided"}>
                <WarningTwoTone twoToneColor="red" />
              </Tooltip>
            ) : null}
          </Typography.Text>
          <div tw="flex flex-row space-x-2 items-center">
            <Checkbox
              checked={wrap}
              onChange={(e) => setWrap(e.target.checked)}
            >
              Wrap Text
            </Checkbox>
            <Segmented
              options={["S", "M", "L"]}
              value={size}
              onChange={(value) => {
                setSize(value as sizes);
              }}
            />
          </div>
        </div>
        <div tw="grow w-full overflow-clip">
          <Editor
            height="100%"
            options={{
              wordWrap: wrap ? "on" : "off",
              minimap: {
                enabled: false,
              },
              lineNumbersMinChars: 3,
            }}
            defaultLanguage={"json"}
            defaultValue={JSON.stringify(node.data?.backup ?? {})}
            onChange={(value, event) => {
              if (value === undefined) return;
              try {
                const data = JSON.parse(value);
                setNode((nd) => ({ ...nd, data: {backup: data} }));
                if (error) setError(false);
              } catch (e) {
                if (!error) setError(true);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Base;
