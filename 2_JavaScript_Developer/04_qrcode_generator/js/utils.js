export function isValidURL(url) {
  const urlPattern =
    /^(https?:\/\/)?([^\s\/]+\.([^\s\/]+\.)*[^\s\/]+)(\/[^\s]*)?$/;
  return urlPattern.test(url);
}

const MILLISECONDS = 1000;
export const durationAlert = 3 * MILLISECONDS;
