import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { ApplicationProps, Json } from "@oloren/core";
import { Button, Input, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useEffect } from "react";
import { TextInputData } from "./Base";

function Applet({
  node,
  outputs,
  setOutputs,
}: // @ts-ignore
ApplicationProps<TextInputData, [], [string]>) {
  const data = node.data as TextInputData;
  return (
    <div className="w-full flex flex-col space-y-2">
      <Input
        className="w-full"
        addonBefore={data.name}
        defaultValue={outputs !== null ? (outputs[0] ? outputs[0].name : "") : null}
        onChange={(e) => {
          console.log("textInput", e);
          console.log("textInput", e.target.value);
          setOutputs([e.target.value]);
        }
        }
      />

    </div>
  );
}

export default Applet;
