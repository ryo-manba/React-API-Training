import { Header } from "@/app/_components/header";
import Link from "next/link";

type Links = {
  name: string;
  path: string;
};

const hooks: Links[] = [
  { name: "use", path: "/examples/use" },
  { name: "TODO: useCallback", path: "/" },
];

const components: Links[] = [{ name: "TODO: Profiler", path: "/" }];

const apis: Links[] = [{ name: "TODO: cache", path: "/" }];

const CategorySection = ({ title, links }: { title: string; links: Links[] }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <ul className="list-disc pl-5 mt-2 text-lg">
        {links.map((linkItem) => (
          <li key={linkItem.path}>
            <Link href={linkItem.path} className="text-blue-500 hover:underline">
              {linkItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="font-sans text-black bg-white">
        <div className="p-10">
          <h1 className="text-4xl font-bold mb-10">React Training</h1>
          <div className="grid gap-10">
            <CategorySection title="Hooks" links={hooks} />
            <CategorySection title="Components" links={components} />
            <CategorySection title="APIs" links={apis} />
          </div>
        </div>
      </main>
    </div>
  );
}
