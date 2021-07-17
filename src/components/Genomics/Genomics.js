import { Upload, message, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const { Dragger } = Upload;

export default function Genomics(props) {
  const [txt, setTxt] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const fileHandler = async (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file.response);
      await setTxt(info.file.response);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
 
  useEffect(() => {
    const data = new Blob([txt], { type: "text/plain" });
    if (downloadLink !== "") window.URL.revokeObjectURL(downloadLink);
    setDownloadLink(window.URL.createObjectURL(data));
  }, [txt, downloadLink]);

  return (
    <div>
      <Dragger
        onChange={fileHandler}
        name="file"
        action="https://eb-ps1-api.herokuapp.com/genomics"
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for uploading only CSV files. Strictly prohibit from uploading
          other files or any sensitive information
        </p>
      </Dragger>
      {txt && (
        <Button>
          <a download="list.txt" href={downloadLink}>
            Download The File
          </a>
        </Button>
      )}
    </div>
  );
}
