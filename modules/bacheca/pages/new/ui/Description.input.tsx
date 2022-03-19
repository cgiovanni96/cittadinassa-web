import Editor from "@global/components/Editor/Editor.component";
import { Control, Controller } from "react-hook-form";
import { FishFormData } from "../components/Fish.form";

export type DescriptionInputProps = {
  control: Control<FishFormData, null>;
};

export const DescriptionInput = ({ control }: DescriptionInputProps) => {
  return (
    <Controller
      control={control}
      name="description"
      render={({ field }) => (
        <Editor
          value={field.value || ""}
          onChange={field.onChange}
          styles={{ root: { height: "300px" } }}
          controls={[
            ["bold", "italic", "underline", "link"],
            ["unorderedList", "h1", "h2", "h3"],
            ["sup", "sub"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
        />
      )}
    />
  );
};
