export function formatValue(value: string) {
  const valueFormatted = parseFloat(value).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return valueFormatted;
}
