import { useState } from "react";
import { UserProps } from "../types/user";

export const UseSearch = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async function (userName: string) {
    setUser(null);
    setIsLoading(true);
    let data: UserProps | null = null;
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setUser(data);
      setIsLoading(false);
      setError(false);
    }
  };

  return {
    user,
    error,
    isLoading,
    loadUser,
  };
};
