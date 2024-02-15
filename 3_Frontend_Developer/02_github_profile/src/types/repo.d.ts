export type RepoProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: Date;
  license?: {
    key: string;
  };
};
