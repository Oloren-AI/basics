import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { ApplicationProps, Json } from "@oloren/core";
import { Button, Typography, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useEffect, useState } from "react";

function Applet({
  setOutputs,
  // @ts-ignore
  window,
}: // @ts-ignore
ApplicationProps<{}, [], [File]>) {
  const [uploaded, setUploaded] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    window.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handlePaste = (e: any) => {
    let clipboardData = e.clipboardData || window.clipboardData;
    let pastedData = clipboardData.items;

    for (let i = 0; i < pastedData.length; i++) {
      if (pastedData[i].type.indexOf("image") === -1) continue;

      let blob = pastedData[i].getAsFile();

      let reader = new FileReader();
      reader.onload = function (event) {
        if (event.target) setImage(event.target.result as string);
        setOutputs([blob]);
      };
      reader.readAsDataURL(blob);
    }
  };

  const [load, setLoad] = React.useState(false);

  return (
    <div tw="w-full flex flex-col space-y-4" onPaste={handlePaste}>
      {uploaded ? <div></div> : null} {/* Triggers a refresh in height */}
      <Typography.Text>Click Here and Paste Image or...</Typography.Text>
      <Upload.Dragger
        onChange={() => {
          setUploaded((uploaded) => !uploaded);
        }}
        customRequest={({ file, onSuccess }) => {
          const f = file as RcFile;
          setImage(URL.createObjectURL(f));
          setOutputs([f]);
          if (onSuccess) onSuccess({});
        }}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Upload File</Button>
      </Upload.Dragger>
      <div tw="h-fit w-full flex flex-col items-center justify-center">
        {image && (
          <img
            onLoad={() => {
              setLoad(true);
            }}
            src={image}
            tw="h-auto mx-auto w-auto max-h-[400px] max-w-full"
          />
        )}
      </div>
    </div>
  );
}

export default Applet;
