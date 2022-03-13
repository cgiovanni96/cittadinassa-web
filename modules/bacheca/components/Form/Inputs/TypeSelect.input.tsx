import { Select, SelectItem } from "@mantine/core";
import { FISH_TYPE } from "@model/Net/Fish.model";
import { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FishFormData } from "../Fish.form";

const formatTypes = (): SelectItem[] => {
  return Object.values(FISH_TYPE).map((type) => ({
    value: type,
    label: type.toUpperCase(),
  }));
};

export type TypeSelectInputProps = {
  control: Control<FishFormData, null>;
};

export const TypeSelectInput = ({ control }: TypeSelectInputProps) => {
  const [data, setData] = useState<SelectItem[]>();

  useEffect(() => {
    const typesData = formatTypes();
    setData(typesData);
  }, []);

  return (
    <Controller
      name="type"
      control={control}
      render={({ field }) => (
        <Select
          label="Tipo"
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
