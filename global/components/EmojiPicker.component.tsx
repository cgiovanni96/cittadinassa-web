import { Children } from "@lib/types/Children.type";
import {
  createStyles,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
  Container,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useEffect, useState } from "react";
import * as unicodeEmoji from "unicode-emoji";

type EmojiPickerProps = {
  close: () => void;
  setEmoji?: (emoji: string) => void;
  portal?: boolean;
} & Children;

export const EmojiPicker = ({ close, setEmoji, portal }: EmojiPickerProps) => {
  const ref = useClickOutside(() => {
    if (portal) close();
  }, ["mouseup", "touchend"]);

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

  const onClickEmoji = (emoji: string) => {
    setEmoji && setEmoji(emoji);
    close();
  };

  const { classes } = emojiPickerStyles();

  return (
    <Container ref={ref}>
      {emojiCategories && (
        <Tabs
          initialTab={0}
          orientation="vertical"
          grow
          styles={(theme) => ({
            body: { flex: "1" },
            root: { width: "100%" },
            tabsListWrapper: { display: "flex" },
            tabControl: { fontSize: theme.fontSizes.xl },
          })}
        >
          {emojiCategories.map((category) => (
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
                        onClick={() => onClickEmoji(emoji.emoji)}
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
      )}
    </Container>
  );
};

const emojiPickerStyles = createStyles((theme) => ({
  emoji: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
