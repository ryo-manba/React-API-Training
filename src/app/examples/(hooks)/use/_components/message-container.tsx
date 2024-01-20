"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Message, type MessageProps } from "./message";

export const MessageContainerWithErrorBoundary = ({ messagePromise }: MessageProps) => {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<p>⌛Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  );
};

export const MessageContainerWithPromiseCatch = ({ messagePromise }: MessageProps) => {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
};
