import { UserProps } from "../types/user";
import { Repository } from "./repository";
import { Tag } from "./ui/tag";

interface ProfileProps {
  data: UserProps;
}

export const Profile = ({ data }: ProfileProps) => {
  if (!data.id) return <p className="text-xl text-red-500">User not found.</p>;

  return (
    <main className="container flex w-full flex-col gap-6">
      <header className="flex flex-wrap gap-4 lg:gap-8">
        <div className="-mt-16 h-24 rounded-xl border-[6px] border-background md:h-36">
          <img
            src={data.avatar_url}
            alt={data.name}
            className="h-full w-full rounded-xl object-cover object-center"
          />
        </div>
        <ul className="mb-6 flex h-full flex-col gap-2 md:flex-row lg:gap-6">
          <Tag title="Followers" info={data.followers} />
          <Tag title="Following" info={data.following} />
          <Tag title="Location" info={data.location} />
        </ul>
      </header>
      <section>
        <div className="mb-8">
          <h1 className="text-[2rem] font-medium capitalize">{data.name}</h1>
          <p className="font-light text-secondary">{data.bio}</p>
        </div>
        <Repository username={data.login} />
      </section>
    </main>
  );
};
