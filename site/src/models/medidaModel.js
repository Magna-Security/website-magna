/** @format */

var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT top 7
        id_dado,    
        fk_servidor,    
        cpu_em_uso,    
        ram_em_uso,    
        dt_registro
    FROM RegistroServer
    ORDER BY id_dado DESC`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `SELECT top 1
        id_dado,    
        fk_servidor,    
        cpu_em_uso,    
        ram_em_uso,    
        dt_registro
    FROM RegistroServer
                    order by id_dado desc`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasSuporte(idAquario, limite_linhas) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT top 3
        id_dado,
        total_armazenamento_disco_1,    
        disco_em_uso_1,    
        disco_em_uso_2,
        total_armazenamento_disco_2,
        dt_registro
    FROM RegistroServer INNER JOIN Servidor ON fk_servidor = id_servidor
    ORDER BY id_dado desc`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    select top 1
      id_dado,    
      fk_servidor,    
      cpu_em_uso,    
      ram_em_uso,    
      dt_registro
    FROM 
      RegistroServer
    ORDER BY id_dado DESC`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealSuporte(idAquario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    select top 1
    id_dado,
        total_armazenamento_disco_1,    
        disco_em_uso_1,    
        disco_em_uso_2,
        total_armazenamento_disco_2,
        dt_registro
    FROM RegistroServer INNER JOIN Servidor ON fk_servidor = id_servidor
    ORDER BY id_dado desc`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarServidores() {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT
        id_servidor,
        nome_servidor,
        total_armazenamento_disco_1,    
        total_armazenamento_disco_2,    
        qtd_nucleos_fisicos,
        qtd_memoria_ram,
        ISNULL(cidade, ' ') as cidade
    FROM Servidor`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletarServidor(idLinha) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    DELETE FROM Servidor WHERE id_servidor = ${idLinha}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarServidor(
  idLinha,
  nome,
  cidade,
  nucleos,
  ram,
  disco1,
  disco2
) {
  instrucaoSql = "";
  console.log(nome, cidade, ram);

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    UPDATE Servidor SET 
      nome_servidor = '${nome}',
      Cidade = '${cidade}',
      qtd_nucleos_fisicos = ${nucleos},
      total_armazenamento_disco_1 = ${disco1},
      total_armazenamento_disco_2 = ${disco2},
      qtd_memoria_ram = ${ram}
      FROM Servidor WHERE id_servidor = ${idLinha}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUsuarios() {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT
        id_usuario,
        tipo_usuario,
        nome_usuario,    
        email
    FROM Usuario`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletarUsuario(idLinha) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    DELETE FROM Usuario WHERE id_usuario = ${idLinha}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarUsuario(idLinha, nome, email, senha, cargo) {
  instrucaoSql = "";
  // console.log(nome, cidade, ram);

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    UPDATE Usuario SET 
      nome_usuario = '${nome}',
      senha = '${senha}',
      email = '${email}',
      tipo_usuario = '${cargo}'
    WHERE id_usuario = ${idLinha}`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas,
  buscarUltimasMedidasSuporte,
  buscarMedidasEmTempoReal,
  buscarMedidasEmTempoRealSuporte,
  buscarServidores,
  deletarServidor,
  atualizarServidor,
  buscarUsuarios,
  deletarUsuario,
  atualizarUsuario,
};
