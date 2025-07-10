import { useState } from "react";

const alunosIniciais = [
  {
    id: 1,
    nome: "Ana Paula",
    turma: "3ºA",
    foto: "/alunos/anapaula.jpg",
  },
  {
    id: 2,
    nome: "João Carlos",
    turma: "3ºB",
    foto: "/alunos/joaocarlos.jpg",
  },
];

export default function Configuracoes() {
  const [abaAtiva, setAbaAtiva] = useState("cadastro");
  const [alunos, setAlunos] = useState(alunosIniciais);
  const [usuario, setUsuario] = useState({
    nome: "Seu Nome",
    email: "seu@email.com",
    senha: "",
    confirmarSenha: "",
    telefone: "(00) 00000-0000",
    cpf: "000.000.000-00",
  });

  const handleAtualizarFoto = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const novaURL = URL.createObjectURL(file);
      setAlunos((prev) =>
        prev.map((aluno) =>
          aluno.id === id ? { ...aluno, foto: novaURL } : aluno
        )
      );
    }
  };

  const handleAtualizarNomeOuTurma = (id, campo, valor) => {
    setAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id ? { ...aluno, [campo]: valor } : aluno
      )
    );
  };

  const handleChangeUsuario = (campo, valor) => {
    setUsuario((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleLogout = () => {
    alert("Usuário saiu do sistema.");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex">
      <div className="w-full bg-white min-h-screen p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-gray-800">Configurações</h2>
          <button
            onClick={handleLogout}
            className="bg-gray-100 px-4 py-1 rounded text-gray-500 hover:text-red-500 transition"
          >
            Sair
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setAbaAtiva("cadastro")}
            className={`px-4 py-2 rounded border ${
              abaAtiva === "cadastro" ? "bg-blue-100 text-blue-800" : "bg-white"
            }`}
          >
            Edição de Cadastro
          </button>
          <button
            onClick={() => setAbaAtiva("alunos")}
            className={`px-4 py-2 rounded border ${
              abaAtiva === "alunos" ? "bg-blue-100 text-blue-800" : "bg-white"
            }`}
          >
            Gerenciar Alunos
          </button>
        </div>

        {abaAtiva === "cadastro" && (
          <div className="bg-gray-50 p-6 rounded w-full flex flex-col gap-4">
            <input
              type="text"
              value={usuario.nome}
              onChange={(e) => handleChangeUsuario("nome", e.target.value)}
              className="border rounded px-4 py-2"
            />
            <input
              type="email"
              value={usuario.email}
              onChange={(e) => handleChangeUsuario("email", e.target.value)}
              className="border rounded px-4 py-2"
            />
            <input
              type="password"
              placeholder="Nova Senha"
              onChange={(e) => handleChangeUsuario("senha", e.target.value)}
              className="border rounded px-4 py-2"
            />
            <input
              type="password"
              placeholder="Confirmar Nova Senha"
              onChange={(e) => handleChangeUsuario("confirmarSenha", e.target.value)}
              className="border rounded px-4 py-2"
            />
            <input
              type="tel"
              value={usuario.telefone}
              onChange={(e) => handleChangeUsuario("telefone", e.target.value)}
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              value={usuario.cpf}
              onChange={(e) => handleChangeUsuario("cpf", e.target.value)}
              className="border rounded px-4 py-2"
            />
            <button className="bg-blue-500 text-white py-2 px-6 rounded w-fit mt-4">
              Salvar alterações
            </button>
          </div>
        )}

        {abaAtiva === "alunos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {alunos.map((aluno) => (
              <div
                key={aluno.id}
                className="border rounded p-4 flex flex-col gap-2 bg-white shadow"
              >
                <img
                  src={aluno.foto}
                  alt={aluno.nome}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-2 border"
                />
                <label className="text-sm font-semibold">Nome</label>
                <input
                  type="text"
                  value={aluno.nome}
                  onChange={(e) =>
                    handleAtualizarNomeOuTurma(aluno.id, "nome", e.target.value)
                  }
                  className="border rounded px-3 py-1"
                />
                <label className="text-sm font-semibold">Turma</label>
                <input
                  type="text"
                  value={aluno.turma}
                  onChange={(e) =>
                    handleAtualizarNomeOuTurma(aluno.id, "turma", e.target.value)
                  }
                  className="border rounded px-3 py-1"
                />
                <label className="text-sm font-semibold">Atualizar Foto</label>
                <input
                  type="file"
                  onChange={(e) => handleAtualizarFoto(e, aluno.id)}
                  className="text-sm"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
