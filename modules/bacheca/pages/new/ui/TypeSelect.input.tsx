import { Select, SelectItem } from "@mantine/core";
import { FISH_TYPE } from "@model/Net/Fish.model";
import { FishFormData } from "@modules/bacheca/pages/new/components/Fish.form";
import { Control, Controller } from "react-hook-form";
import { DATA } from "../new.data";

const formatTypes = (): SelectItem[] => {
  return Object.values(FISH_TYPE).map((type) => ({
    value: type,
    label: type.toUpperCase(),
  }));
};

const data = formatTypes();

export type TypeSelectInputProps = {
  control: Control<FishFormData, null>;
};

export const TypeSelectInput = ({ control }: TypeSelectInputProps) => {
  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) => (
        <Select
          label={DATA.FIELDS.TYPE.LABEL}
          variant="default"
          value={field.value}
          onChange={field.onChange}
          data={data || []}
          required
        />
      )}
    />
  );
};
