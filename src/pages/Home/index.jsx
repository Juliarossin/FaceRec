import React from 'react';

const Home = () => {
  return (
    <div className="p-10 text-center font-sans">
      <h2 className="text-3xl font-bold mb-4">Bem-vindo ao sistema FaceRec!</h2>
      <p className="text-lg mb-10">Gerencie facilmente os acessos e os alunos.</p>

      <div className="flex justify-center flex-wrap gap-6 mb-8">
        <div className="bg-white border rounded-xl shadow-md w-60 p-6">
          <h3 className="text-xl font-semibold mb-2">👨‍🎓 Alunos</h3>
          <p className="text-gray-600">120 cadastrados</p>
        </div>
        <div className="bg-white border rounded-xl shadow-md w-60 p-6">
          <h3 className="text-xl font-semibold mb-2">📷 Último Registro</h3>
          <p className="text-gray-600">Hoje às 07:45</p>
        </div>
        <div className="bg-white border rounded-xl shadow-md w-60 p-6">
          <h3 className="text-xl font-semibold mb-2">⚠️ Alertas</h3>
          <p className="text-gray-600">Nenhum alerta</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
          ➕ Cadastrar Aluno
        </button>
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
          📄 Ver Relatórios
        </button>
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
          ⚙️ Ir para Configurações
        </button>
      </div>
    </div>
  );
};

export default Home;
