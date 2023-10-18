export function formatDate(date: string) {
  const dateString = date;
  const dateFormatted = new Date(dateString);

  // Obtém o dia, mês e ano da data
  const day = dateFormatted.getDate();
  const month = dateFormatted.getMonth() + 1;
  const year = dateFormatted.getFullYear();

  // Formata a data no formato "99/99/9999"
  return `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;
}
