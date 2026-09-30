export function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(
  value: string | number | Date,
  locale = "en-US"
): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function truncate(value: string, length = 80): string {
  if (value.length <= length) {
    return value;
  }
  return `${value.slice(0, length).trimEnd()}...`;
}
