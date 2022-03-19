export type EmojiProps = {
  emoji: string;
  onClick?: () => void;
  size?: number;
  className?: string;
};

export const Emoji = ({ emoji, onClick, size, className }: EmojiProps) => {
  return (
    <span
      className={className && className}
      role="image"
      aria-label={emoji}
      onClick={() => {
        onClick && onClick();
      }}
      style={{ fontSize: `${size}px` || "inherit" }}
    >
      {emoji}
    </span>
  );
};
