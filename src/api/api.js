const MONTH_DESCRIPTIONS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const YEARS = [2019, 2020, 2021].map((year) => ({
  id: year,
  description: year.toString(),
}));

export const MONTHS = Array.from({length: 12}).map((_, index) => ({
    id: index + 1,
    description: MONTH_DESCRIPTIONS[index],

}));
