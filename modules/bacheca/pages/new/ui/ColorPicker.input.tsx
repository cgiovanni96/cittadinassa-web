import { ColorInput } from "@mantine/core";
import { DATA } from "../new.data";

export type ColorInputType = {
  color: string;
  setColor: (color: string) => void;
};

export const ColorPickerInput = ({ color, setColor }: ColorInputType) => {
  return (
    <ColorInput
      format="hex"
      label={DATA.FIELDS.COLOR.LABEL}
      variant="default"
      placeholder={DATA.FIELDS.COLOR.PLACEHOLDER}
      value={color}
      onChange={setColor}
      swatches={[
        "#25262b",
        "#868e96",
        "#fa5252",
        "#e64980",
        "#be4bdb",
        "#7950f2",
        "#4c6ef5",
        "#228be6",
        "#15aabf",
        "#12b886",
        "#40c057",
        "#82c91e",
        "#fab005",
        "#fd7e14",
      ]}
    />
  );
};
