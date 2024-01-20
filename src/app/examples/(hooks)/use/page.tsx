import { ContextExample } from "./_components/context";
import { RejectedPromiseExample } from "./_components/rejected-promise";
import { ServerToClientExample } from "./_components/server-to-client";

export default function UseExample() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">
        <a
          href="https://ja.react.dev/reference/react/use"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          use
        </a>
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-bold">Context Example</h2>
          <ContextExample />
        </div>
        <hr className="my-2" />
        <div>
          <h2 className="text-lg font-bold">Server to Client Data Streaming Example</h2>
          <ServerToClientExample />
        </div>
        <hr className="my-2" />
        <div>
          <h2 className="text-lg font-bold">Rejected Promise Example</h2>
          <RejectedPromiseExample />
        </div>
      </div>
    </>
  );
}
