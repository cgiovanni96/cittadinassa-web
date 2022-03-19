import { Button, Container, Group, Text, Title } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DATA } from "../new.data";

export type UploadCoverProps = {
  setInfo: (file: File | undefined) => void;
};

export const UploadCover = ({ setInfo }: UploadCoverProps) => {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
      setInfo(file);
    } else {
      setPreview(undefined);
      setInfo && setInfo(undefined);
    }
  }, [file]);

  return (
    <>
      <Title order={2}>{DATA.SECTIONS.COVER}</Title>
      {!preview && (
        <Dropzone
          onDrop={(files) => setFile(files[0])}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          {(status) => (
            <Group
              position="center"
              spacing="xl"
              style={{ height: 220, pointerEvents: "none" }}
            >
              <div>
                <Text size="xl" inline>
                  {DATA.FIELDS.COVER.LABEL}
                </Text>
              </div>
            </Group>
          )}
        </Dropzone>
      )}

      {preview && (
        <>
          <Container
            sx={{
              width: "100%",
              height: 250,
              position: "relative",
              padding: "0",
            }}
          >
            <Image src={preview} alt={"uploaded preview"} layout="fill" />
            <Group position="right">
              <Button
                variant="light"
                color="red"
                onClick={() => setFile(undefined)}
              >
                X
              </Button>
            </Group>
          </Container>
        </>
      )}
    </>
  );
};
