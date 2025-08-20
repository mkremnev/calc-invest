export const clearNotANumber = (value: string) => {
  if (!value) return "";

  let s = value.replace(/[^0-9.]/g, "");
  // Убираем больше одого нуля
  s = s.replace(/^0+(?!$)/, "");
  // Убираем все точки кроме первой
  const parts = s.split(".");
  if (parts.length > 1) {
    s = parts.shift() + "." + parts.join("");
  }

  return s;
};

export const clearMonths = (value: string) => {
  if (!value) return "";

  const s = clearNotANumber(value);

  const num = Number(s);

  if (num < 1 || num > 12) {
    return "";
  }

  return s;
};
