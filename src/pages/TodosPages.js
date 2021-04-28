import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

import { YEARS, MONTHS } from "../api/api";
import Select from "../components/Select";

export default function TodosPages() {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [selectedMonth, setSelectedMonth] = useState(4);

  const handleYearChange = (newYear) => {
   setSelectedYear(newYear)
  };
  const handleMonthChange = (newMonth) => {
    setSelectedMonth(newMonth)
  };

  console.log(selectedYear);
  console.log(selectedMonth);

  return (
    <div>
      <Header> React Todo's</Header>
      <Main>
        <div className="flex flex-col space-y-2">
          <Select
            options={YEARS}
            labelDescription="Selecione um Ano:"
            selectValue={selectedYear}
            onSelect={handleYearChange}
          />
          <Select
            options={MONTHS}
            labelDescription="Selecione um Mês:"
            selectValue={selectedMonth}
            onSelect={handleMonthChange}
          />
        </div>
      </Main>
    </div>
  );
}
