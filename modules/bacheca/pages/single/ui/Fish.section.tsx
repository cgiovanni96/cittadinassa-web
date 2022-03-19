import { EditorReadOnly } from "@global/components/Editor/EditorReadOnly.component";
import { Tabs } from "@mantine/core";
import Fish from "@model/Net/Fish.model";
import { Files } from "../components/Files.section";
import { DATA } from "../single.data";

export type FishTabProps = {
  fish: Fish;
};

export const FishSection = ({ fish }: FishTabProps) => {
  return (
    <Tabs
      color="indigo"
      styles={{ root: { paddingLeft: 0, paddingRight: 0, marginTop: 0 } }}
    >
      <Tabs.Tab label={DATA.TABS.HOME.TITLE}>
        <EditorReadOnly value={fish.description || ""} />
      </Tabs.Tab>

      {fish.extra.drive && (
        <Tabs.Tab label={DATA.TABS.FILES.TITLE}>
          <Files folderId={fish.extra.drive} />
        </Tabs.Tab>
      )}
      <Tabs.Tab label={DATA.TABS.EVENTS.TITLE}>WIP</Tabs.Tab>
    </Tabs>
  );
};
