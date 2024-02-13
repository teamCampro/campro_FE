export const formatDate = (date: Date) =>
  new Date(date.toLocaleDateString('fr-CA')).toISOString().slice(0, 10);
