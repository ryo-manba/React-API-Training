"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Message, MessageProps } from "./message";

export const RejectedPromiseExample = () => {
  const messagePromise = fetchMockError();
  const messagePromiseWithCatch = fetchMockErrorWithCatch();
  return (
    <>
      <MessageContainerWithErrorBoundary messagePromise={messagePromise} />
      <MessageContainerWithPromiseCatch messagePromise={messagePromiseWithCatch} />
      Not suspended message.
    </>
  );
};

const MessageContainerWithErrorBoundary = ({ messagePromise }: MessageProps) => {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<p>⌛Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  );
};

const MessageContainerWithPromiseCatch = ({ messagePromise }: MessageProps) => {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
};

const fetchMockError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Mock error occurred");
      // Throwing an error causes the browser to display an error
      // reject(new Error("Mock error occurred"));
    }, 1000);
  });
};

const fetchMockErrorWithCatch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Mock error occurred"));
    }, 1000);
  }).catch((error) => {
    return "no new message found.";
  });
};
