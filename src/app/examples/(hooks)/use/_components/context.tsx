"use client";
import { createContext, use, useContext, useState } from "react";

const ThemeContext = createContext<string | null>(null);
const UserContext = createContext<string | null>(null);

export const ContextExample = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <label className="flex items-center gap-2">
        <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
        Toggle Dark Mode
      </label>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value="test">
          <Form />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

const Form = () => {
  return <Panel title="Welcome">Some content goes here.</Panel>;
};

type Props = {
  title: string;
  children: React.ReactNode;
};

const Panel = ({ title, children }: Props) => {
  const theme = useContext(ThemeContext);
  const userWithUseContext = useContext(UserContext);

  for (let i = 0; i < 3; i++) {
    // Cannot call useContext in a loop
    const user = use(UserContext);
    console.log(user);
  }

  let user: string | null;
  if (theme === "dark") {
    // Cannot call useContext in a conditional branch
    user = use(UserContext);
    user += "👻";
  } else {
    user = use(UserContext);
    user += "🌞";
  }

  return (
    <section className={`p-4 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"}`}>
      <div className="font-semibold">Title: {title}</div>
      <div className="mb-2">Theme: {theme}</div>
      <div className="mb-2">User with useContext: {userWithUseContext}</div>
      <div className="mb-2">User with use: {user}</div>
      <div>{children}</div>
    </section>
  );
};
