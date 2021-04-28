import React from "react";

export default function Sumary({ total = 10, done = 8, undone = 2 }) {
  return (
    <div className="mt-4 flex flex-row itens-center justify-center space-x-2">
      <span>Toal: {total}</span>
      <span>Cumpridas: {undone}</span>
      <span>Não-cumpridas: {done}</span>
    </div>
  );
}
