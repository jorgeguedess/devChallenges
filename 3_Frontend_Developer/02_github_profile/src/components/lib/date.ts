import { formatDistanceToNow } from "date-fns";

export function formatDate(date: Date): string {
  const formattedDistance = formatDistanceToNow(date, { addSuffix: true });
  return `update ${formattedDistance}`;
}
