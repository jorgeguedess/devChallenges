import { Profile } from "./components/profile";
import { Search } from "./components/search";
import { UseSearch } from "./hooks/useSearch";

export function App() {
  const { user, isLoading, loadUser, error } = UseSearch();

  return (
    <div className="flex min-h-screen flex-col items-center bg-background pb-5 text-foreground">
      <Search loadUser={loadUser} />
      {isLoading && <p>loading...</p>}
      {user && <Profile data={user} />}
      {error && <p>Error</p>}
    </div>
  );
}
