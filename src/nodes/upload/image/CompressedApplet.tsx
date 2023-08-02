import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { ApplicationProps, Json } from "@oloren/core";
import { Button, Typography, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useEffect, useState } from "react";
import imageCompression from 'browser-image-compression';

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

  const handlePaste = async (e: any) => {
    let clipboardData = e.clipboardData || window.clipboardData;
    let pastedData = clipboardData.items;

    for (let i = 0; i < pastedData.length; i++) {
      if (pastedData[i].type.indexOf("image") === -1) continue;

      let blob = pastedData[i].getAsFile();

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        fileType: 'image/jpeg',
      };

      try {
        const compressedFile = await imageCompression(blob, options);
        console.log(compressedFile)
        let reader = new FileReader();
        reader.onload = function (event) {
          if (event.target) setImage(event.target.result as string);
          const rcFile = new File([compressedFile], "image.jpg", {
            type: 'image/jpeg',
            lastModified: Date.now(),
          });
          setOutputs([rcFile]);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
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
        
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            fileType: 'image/jpeg',
          };
        
          imageCompression(f, options)
            .then((compressedFile: Blob) => {
              setImage(URL.createObjectURL(compressedFile));
              // convert blob to rcFile
              const rcFile = new File([compressedFile], f.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              setOutputs([rcFile]);
              if (onSuccess) onSuccess({});
            })
            .catch((error: any) => {
              console.error("Error compressing image:", error);
            });
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
