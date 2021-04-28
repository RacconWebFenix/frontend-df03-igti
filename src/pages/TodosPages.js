import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

import { YEARS, MONTHS, apiGetTodosFrom, apiUpdateTodo } from "../api/api";
import Select from "../components/Select";
import Loading from "../components/Loading";
import Sumary from "../components/Sumary";
import Todos from "../components/Todos";
import Todo from "../components/Todo";

const today = new Date();

function getCurrentYear() {
  return today.getFullYear();
}

function getCurrentMonth() {
  return today.getMonth() + 1;
}

export default function TodosPages() {
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSelectedTodos() {
      setIsLoading(true);
      const apiTodos = await apiGetTodosFrom(selectedYear, selectedMonth);
      setSelectedTodos(apiTodos);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
    getSelectedTodos();
  }, [selectedMonth, selectedYear]);

  const handleYearChange = (newYear) => {
    setSelectedYear(newYear);
  };
  const handleMonthChange = (newMonth) => {
    setSelectedMonth(newMonth);
  };

  const handleToggle = async (todoId) => {
    const updatedTodos = [...selectedTodos];
    const index = updatedTodos.findIndex((todo) => todo.id === todoId);
    updatedTodos[index].done = !updatedTodos[index].done;

    await apiUpdateTodo(updatedTodos[index]);

    setSelectedTodos(updatedTodos);
  };

  let todosJsx = (
    <div className="flex flex-row justify-center">
      <Loading />
    </div>
  );

  let done,
    undone = 8;

  if (!isLoading) {
    done = selectedTodos.filter(({ done }) => done).length;
    undone = selectedTodos.filter(({ done }) => !done).length;

    todosJsx = (
      <div>
        <Sumary total={selectedTodos.length} done={done} undone={undone} />

        <Todos>
          {selectedTodos.map((todo) => {
            return (
              <Todo onTodoToggle={handleToggle} key={todo.id}>
                {todo}
              </Todo>
            );
          })}
        </Todos>
      </div>
    );
  }

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

        {todosJsx}
      </Main>
    </div>
  );
}
