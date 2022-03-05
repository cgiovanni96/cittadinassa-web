import { Button, Group, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";
import { useUploadCover } from "../api/hooks";

export const UploadCover = () => {
  //   return <>UploadCover</>;
  const [file, setFile] = useState<File>();

  const { mutate } = useUploadCover();

  const uploadFile = () => {
    const data = new FormData();
    if (!file) return;
    data.append("file", file);

    mutate(data);
  };

  return (
    <>
      <Dropzone
        onDrop={(files) => setFile(files[0])}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        {(status) => (
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: "none" }}
          >
            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        )}
      </Dropzone>

      <Text>{file && file.name}</Text>
      <Button onClick={uploadFile}>Carica</Button>
    </>
  );
};
