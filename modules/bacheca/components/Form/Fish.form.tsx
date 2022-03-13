import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";

import { DescriptionInput } from "./Inputs/Description.input";
import { ColorPickerInput } from "./Inputs/ColorPicker.input";
import { EmojiPickerInput } from "./Inputs/EmojiPicker.input";
import { TypeSelectInput } from "./Inputs/TypeSelect.input";
import { SectionDivider } from "./SectionDivider.component";
import { useCreateFish, useUploadCover } from "@modules/bacheca/api/hooks";
import { FISH_TYPE } from "@model/Net/Fish.model";
import { CreateFishDto } from "@modules/bacheca/api/fish.dto";
import { calls } from "data/api.data";

const formatDto = (data: FishFormData): CreateFishDto => {
  return {
    name: data.name,
    introduction: data.introduction,
    description: data.description,
    type: data.type,
    media: {
      emoji: data.emoji,
      color: data.color,
    },
  };
};

export type FishFormData = {
  name: string;
  introduction: string;

  description?: string;
  emoji?: string;
  color?: string;
  type: FISH_TYPE;
};

const fishSchema = z.object({
  name: z.string(),
  introduction: z.string(),
  description: z.string().optional(),
  emoji: z.string().optional(),
  type: z.nativeEnum(FISH_TYPE),
});

export type FishFormProps = {
  cover: File | undefined;
};

export const FishForm = ({ cover }: FishFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FishFormData>({ resolver: zodResolver(fishSchema) });
  const queryClient = useQueryClient();
  const router = useRouter();

  const coverMutation = useUploadCover();
  const fishMutation = useCreateFish();

  const [color, setColor] = useState<string>("");

  const onSubmit = async (data: FishFormData) => {
    const dto = formatDto(data);

    if (cover) {
      const data = new FormData();
      data.append("file", cover);

      coverMutation.mutate(data, {
        onSuccess: () => {
          fishMutation.mutate(
            {
              ...dto,
              media: { ...dto.media, cover: coverMutation.data },
            },
            {
              onSuccess: ({ fish }) => {
                queryClient.invalidateQueries(calls.getAllFishes);
                router.push(`/bacheca/${fish.id}`);
              },
            }
          );
        },
      });
    } else
      fishMutation.mutate(dto, {
        onSuccess: ({ fish }) => {
          queryClient.invalidateQueries(calls.getAllFishes);
          router.push(`/bacheca/${fish.id}`);
        },
      });
  };

  return (
    <>
      <SectionDivider title="Info" order={2} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Group spacing="xl" align="flex-end">
          <TypeSelectInput control={control} />

          <EmojiPickerInput control={control} />

          <TextInput
            variant="default"
            id="0"
            placeholder={"Nome"}
            label={"Nome"}
            required
            sx={{ flex: "1" }}
            {...register("name")}
            error={errors.name?.message}
          />

          <ColorPickerInput color={color} setColor={setColor} />
        </Group>

        <SectionDivider title="Introduzione" order={2} />

        <Textarea
          label="Introduzione"
          variant="default"
          placeholder="Breve introduzione del progetto"
          minRows={2}
          maxRows={4}
          required
          {...register("introduction")}
          error={errors.introduction?.message}
        />

        <SectionDivider title="Descrizione" order={2} />

        <DescriptionInput control={control} />

        <Button type="submit" loading={fishMutation.isLoading}>
          Create
        </Button>
      </form>
    </>
  );
};
