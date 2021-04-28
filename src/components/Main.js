import React from 'react'

export default function Main({ children = "Conteudo do Main" }) {
  return (
    <div>
      <main>
        <div className="container mx-auto p-4">
          <h2>{children}</h2>
        </div>
      </main>
    </div>
  );
}
