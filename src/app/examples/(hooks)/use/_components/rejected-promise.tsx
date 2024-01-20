import { MessageContainerWithErrorBoundary, MessageContainerWithPromiseCatch } from "./message-container";

export const RejectedPromiseExample = () => {
  const messagePromise = fetchMockError();
  const messagePromiseWithCatch = fetchMockErrorWithCatch();
  return (
    <>
      {/* MEMO: ErrorBoundary causes build error */}
      {/* <MessageContainerWithErrorBoundary messagePromise={messagePromise} /> */}
      <MessageContainerWithPromiseCatch messagePromise={messagePromiseWithCatch} />
      Not suspended message.
    </>
  );
};

const fetchMockError = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Mock error occurred");
      // Throwing an error causes the browser to display an error
      // reject(new Error("Mock error occurred"));
    }, 1000);
  });
};

const fetchMockErrorWithCatch = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Mock error occurred"));
    }, 1000);
  }).catch((error) => {
    return "no new message found.";
  });
};
