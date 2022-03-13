import EditorComponent from "./Editor.component";
import { createStyles } from "@mantine/core";

export type EditorReadOnlyProps = {
  value: string;
};
export const EditorReadOnly = ({ value }: EditorReadOnlyProps) => {
  const { classes } = readOnlyStyles();

  return (
    <EditorComponent
      value={value}
      onChange={() => {}}
      readOnly
      classNames={{
        root: classes.root,
      }}
    />
  );
};

const readOnlyStyles = createStyles(() => ({
  root: {
    background: "transparent",
    border: "none",

    "& .ql-editor": {
      padding: "0",
    },
  },
}));
