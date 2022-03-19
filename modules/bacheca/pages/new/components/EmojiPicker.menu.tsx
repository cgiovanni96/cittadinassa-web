import { useState } from "react";
import { Button, Menu } from "@mantine/core";

import { EmojiPicker } from "@global/components/EmojiPicker.component";
import { Control, Controller } from "react-hook-form";
import { FishFormData } from "./Fish.form";
import { DATA } from "../new.data";

export type EmojiPickerInputProps = {
  control: Control<FishFormData, any>;
};

export const EmojiPickerInput = ({ control }: EmojiPickerInputProps) => {
  const [openEmoji, setEmojiPicker] = useState<boolean>(false);

  return (
    <Controller
      name="emoji"
      control={control}
      render={({ field }) => (
        <Menu
          position="bottom"
          opened={openEmoji}
          clickOutsideEvents={["mouseup", "touchend"]}
          control={
            <Button onClick={() => setEmojiPicker(!openEmoji)} variant="subtle">
              {DATA.FIELDS.EMOJI.LABEL}
              {field.value && (
                <span role="image" aria-label={field.value}>
                  {field.value}
                </span>
              )}
            </Button>
          }
          styles={{ body: { width: "400px" } }}
        >
          <Menu.Item
            component={EmojiPicker}
            close={() => setEmojiPicker(false)}
            setEmoji={field.onChange}
            portal
          >
            Hello
          </Menu.Item>
        </Menu>
      )}
    />
  );
};
