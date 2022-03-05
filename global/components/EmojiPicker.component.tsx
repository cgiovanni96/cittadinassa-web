import {
  createStyles,
  Modal,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import * as unicodeEmoji from "unicode-emoji";

type EmojiPickerProps = {
  opened: boolean;
  close: () => void;
  setEmoji?: (emoji: string) => void;
};

export const EmojiPicker = ({ opened, close, setEmoji }: EmojiPickerProps) => {
  const [emojis] = useState<
    Record<unicodeEmoji.GroupedBy, unicodeEmoji.Emoji[]>
  >(unicodeEmoji.getEmojisGroupedBy("category", { versionAbove: "12.0" }));

  const [emojiCategories, setEmojiCategories] =
    useState<{ id: unicodeEmoji.GroupedBy; emoji: string }[]>();

  useEffect(() => {
    const catIds = Object.keys(emojis) as unicodeEmoji.GroupedBy[];
    const catEmojis = catIds.map((id) => emojis[id][3].emoji);

    const cat = catIds.map((catId, id) => ({
      id: catId,
      emoji: catEmojis[id],
    }));

    setEmojiCategories(cat);
    unicodeEmoji.getEmojisGroupedBy("category");
  }, []);

  const { classes } = emojiPickerStyles();

  return (
    <Modal opened={opened} onClose={close} centered size="lg">
      <Tabs
        orientation="vertical"
        grow
        styles={(theme) => ({
          body: { flex: "1" },
          root: { width: "100%" },
          tabsListWrapper: { display: "flex" },
          tabControl: { fontSize: theme.fontSizes.xl },
        })}
      >
        {emojiCategories?.map((category) => (
          <Tabs.Tab key={category.id} label={category.emoji}>
            <ScrollArea style={{ height: 400, width: "100%" }}>
              <SimpleGrid
                cols={6}
                spacing="md"
                sx={(theme) => ({ marginTop: theme.spacing.md })}
              >
                {emojis[category.id].map((emoji) => (
                  <Text key={emoji.emoji} size="xl" align="center">
                    <span
                      role="img"
                      aria-label={emoji.description}
                      className={classes.emoji}
                      onClick={() => setEmoji && setEmoji(emoji.emoji)}
                    >
                      {emoji.emoji}
                    </span>
                  </Text>
                ))}
              </SimpleGrid>
            </ScrollArea>
          </Tabs.Tab>
        ))}
      </Tabs>
    </Modal>
  );
};

const emojiPickerStyles = createStyles((theme) => ({
  emoji: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
