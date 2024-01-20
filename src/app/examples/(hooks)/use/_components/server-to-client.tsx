import { Suspense } from "react";
import { fetchCannotSerializeData, fetchMessage } from "./lib";
import { Message } from "./message";

export const ServerToClientExample = () => {
  const messagePromise = fetchMessage();

  // Using await will block its render until the await statement is completed
  // const messagePromise = await fetchMessage();

  // This will throw an error because the promise cannot be serialized
  // const messagePromise = fetchCannotSerializeData();

  return (
    <>
      <Suspense fallback={<p>waiting for message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
      Not suspended message.
    </>
  );
};
