import { useEffect, useState } from "react";
import { RepoProps } from "../types/repo";
import { Icon } from "./icons";
import { formatDate } from "./lib/date";

interface RepositoryProps {
  username: string;
}

const step = 3;

export const Repository = ({ username }: RepositoryProps) => {
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState<number>(step);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch repos");
        }
        const data: RepoProps[] = await res.json();

        const orderedRepos = data.sort((old, active) => {
          const dateOld = new Date(old.updated_at).getTime();
          const dateActive = new Date(active.updated_at).getTime();
          return dateActive - dateOld;
        });

        setRepos(orderedRepos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const handleShowMore = () => {
    setShowMore((prev) => prev + step);
  };

  if (!repos) return null;

  return (
    <div>
      {isLoading && <p>loading...</p>}
      <ul className="mb-8 flex flex-col gap-6">
        {repos &&
          repos
            .map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="block w-full rounded-xl bg-gradient-to-r from-primary to-card p-4 text-sm outline-none transition-all hover:scale-[1.03] focus:ring-2 focus:ring-active"
                >
                  <h2 className="mb-2 text-lg font-bold sm:text-xl">
                    {repo.name}
                  </h2>
                  <p className="mb-4 font-light">{repo.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-base">
                    <span className="flex items-center gap-1 text-sm">
                      <Icon.Nesting />
                      {repo.forks_count}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Icon.Star /> {repo.stargazers_count}
                    </span>
                    <time className="ml-4 text-xs">
                      {formatDate(repo.updated_at)}
                    </time>
                  </div>
                </a>
              </li>
            ))
            .slice(0, showMore)}
      </ul>
      {showMore < repos.length && (
        <div className="text-center">
          <button className="hover:text-active" onClick={handleShowMore}>
            View more repositories
          </button>
        </div>
      )}
    </div>
  );
};
