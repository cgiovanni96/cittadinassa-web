import { DriveFile } from "@global/types/file.type";
import {
  Group,
  SimpleGrid,
  Paper,
  Tooltip,
  ActionIcon,
  Divider,
  Text,
} from "@mantine/core";
import { ArrowLeft, Folder, ArrowRight } from "tabler-icons-react";
import { DATA } from "../single.data";

export type FolderListProps = {
  folders?: DriveFile[];
  isSubFolder: boolean;
  goBack: () => void;
  goSubFolder: (folderId: string) => void;
};

export const FolderList = ({
  folders,
  goBack,
  isSubFolder,
  goSubFolder,
}: FolderListProps) => {
  return (
    <>
      {folders && folders.length > 0 && (
        <>
          <Group>
            {isSubFolder && 1 && <ArrowLeft onClick={goBack} />}
            <Text weight="bold">{DATA.TABS.FILES.FOLDERS.TITLE}</Text>
          </Group>
          <SimpleGrid
            cols={4}
            spacing="md"
            sx={(theme) => ({ marginTop: theme.spacing.md })}
            breakpoints={[
              { maxWidth: "xs", cols: 1, spacing: "sm" },
              { maxWidth: "md", cols: 2, spacing: "md" },
            ]}
          >
            {folders.map((folder) => (
              <Paper
                shadow="md"
                withBorder
                padding="sm"
                key={folder.id}
                sx={(theme) => ({ background: theme.colors.gray[9] })}
              >
                <Group>
                  <Folder size={16} />
                  <Text
                    size="xs"
                    sx={{
                      whiteSpace: "nowrap",
                      flex: "1",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {folder.name}
                  </Text>
                  <ActionIcon
                    size="xs"
                    onClick={() => {
                      goSubFolder(folder.id);
                    }}
                  >
                    <ArrowRight />
                  </ActionIcon>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
          <Divider sx={{ margin: "24px 0" }} />
        </>
      )}
    </>
  );
};
