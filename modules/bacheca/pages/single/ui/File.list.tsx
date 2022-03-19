import { DriveFile } from "@global/types/file.type";
import { Group, ActionIcon, Text, Table } from "@mantine/core";
import { formatFileName, humanFileSize } from "@modules/bacheca/shared/utils";
import { ArrowLeft, FileText, Download } from "tabler-icons-react";
import { DATA } from "../single.data";

export type FileListProps = {
  files?: DriveFile[];
  canGoBack: boolean;
  goBack: () => void;
  download: (id: string, type: string, name: string) => void;
};

export const FileList = ({
  files,
  canGoBack,
  goBack,
  download,
}: FileListProps) => {
  return (
    <>
      {files && files.length > 0 && (
        <>
          <Group>
            {canGoBack && <ArrowLeft onClick={goBack} />}
            <Text weight="bold">{DATA.TABS.FILES.LIST.TITLE}</Text>
          </Group>
          <Table highlightOnHover>
            <thead>
              <tr>
                <td></td>
                <td>{DATA.TABS.FILES.LIST.TABLE.NAME}</td>
                <td style={{ textAlign: "center" }}>
                  {DATA.TABS.FILES.LIST.TABLE.SIZE}
                </td>
                <td style={{ textAlign: "right" }}>
                  {DATA.TABS.FILES.LIST.TABLE.ACTION}
                </td>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}>
                  <td>
                    <FileText />
                  </td>
                  <td style={{ paddingLeft: 0 }}>
                    {formatFileName(file.name)}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {humanFileSize(file.size)}
                  </td>
                  <td>
                    <ActionIcon
                      variant="transparent"
                      sx={{ marginLeft: "auto" }}
                      onClick={() => {
                        download(file.id, file.mimeType, file.name);
                      }}
                    >
                      <Download />
                    </ActionIcon>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
