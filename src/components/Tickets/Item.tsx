import React from "react";

type Item = {
  id: string | number;
  item: string;
  bought: boolean;
  emDestaque: boolean;
};

type ItemProps = {
  item: Item;
  onToggle: (id: string | number) => void;
};

function isYouTubeLink(url: any): url is string {
  return url.includes("youtube.com/watch?v=");
}

function getYouTubeEmbedUrl(url: string) {
  return url.replace("watch?v=", "embed/");
}

export default function Item({ item, onToggle }: ItemProps) {
  console.log(item.item);
  return (
    <div>
      {isYouTubeLink(item.item) ? (
        <div className="flex-1 cursor-pointer text-lg w-fit">
          <iframe
            width="560"
            height="315"
            src={getYouTubeEmbedUrl(item.item)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div
          className={`flex-1 cursor-pointer text-lg
        ${
          item.bought
            ? "line-through decoration-2 text-[var(--color-text-secondary)] dark:text-gray-400"
            : "hover:text-[var(--color-text-secondary)] dark:text-gray-200 text-[var(--color-text-primary)]"
        }`}
          onClick={() => onToggle(item.id)}
        >
          {item.item}
        </div>
      )}
    </div>
  );
}
