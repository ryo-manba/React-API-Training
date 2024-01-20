"use client";

import { use } from "react";

export type MessageProps = {
  messagePromise: Promise<unknown>;
};
export const Message = ({ messagePromise }: MessageProps) => {
  // use() takes a promise and returns the resolved value
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
};
