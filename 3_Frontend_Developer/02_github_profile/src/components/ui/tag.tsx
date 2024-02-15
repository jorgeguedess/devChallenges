interface TagProps {
  title: string;
  info: any;
}

export const Tag = ({ title, info }: TagProps) => {
  return (
    <li className="flex w-fit flex-wrap gap-2 rounded-xl bg-primary p-3 text-base text-input sm:px-5 sm:py-4">
      {title}{" "}
      <span className="text-wrap border-l border-l-input pl-2 text-foreground">
        {info}
      </span>
    </li>
  );
};
