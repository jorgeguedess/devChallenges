import { KeyboardEvent, useEffect, useState } from "react";
import { Icon } from "./icons";
import { UserProps } from "../types/user";

interface SearchProps {
  loadUser: (userName: string) => Promise<UserProps | null | undefined>;
}

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState<string>("github");

  const handleKeyPress = (event: KeyboardEvent) => {
    if (userName.length === 0) return;
    if (event.key === "Enter") {
      loadUser(userName);
    }
  };

  useEffect(() => {
    loadUser(userName);
  }, []);

  return (
    <header className="mb-2 flex min-h-56 w-full flex-col items-center bg-[url('/hero-image-github-profile.png')] bg-cover bg-center bg-no-repeat pb-10 pt-5">
      <div className="container w-full max-w-[40rem] md:w-full">
        <div className="relative mb-2 flex items-center rounded-xl bg-background text-foreground md:w-full">
          <label htmlFor="search" className="sr-only">
            Username
          </label>
          <Icon.Search className="absolute left-2  *:stroke-input" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="username"
            className="w-full rounded-xl bg-transparent p-3 pl-10 outline-none placeholder:text-input hover:ring-2 hover:ring-active focus:ring-2 focus:ring-active"
            onKeyDown={handleKeyPress}
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
        </div>
      </div>
    </header>
  );
};
