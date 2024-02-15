import { useState } from "react";
import { UserProps } from "../types/user";

export const UseSearch = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async function (userName: string) {
    setUser(null);
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/users/${userName.toLowerCase()}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }

      const data: UserProps | null = await res.json();
      setUser(data);
      return data;
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    error,
    isLoading,
    loadUser,
  };
};
