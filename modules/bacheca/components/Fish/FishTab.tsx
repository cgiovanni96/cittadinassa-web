import { EditorReadOnly } from "@global/components/Editor/EditorReadOnly.component";
import { Tabs } from "@mantine/core";
import Fish from "@model/Net/Fish.model";

export type FishTabProps = {
  fish: Fish;
};

export const FishTab = ({ fish }: FishTabProps) => {
  return (
    <Tabs
      color="indigo"
      styles={{ root: { paddingLeft: 0, paddingRight: 0, marginTop: 0 } }}
    >
      <Tabs.Tab label="Descrizione">
        <EditorReadOnly value={fish.description || ""} />
      </Tabs.Tab>

      <Tabs.Tab label="File">FILES</Tabs.Tab>
      <Tabs.Tab label="Eventi">WIP</Tabs.Tab>
    </Tabs>
  );
};
