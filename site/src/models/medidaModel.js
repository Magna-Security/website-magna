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

module.exports = {
  buscarUltimasMedidas,
  buscarUltimasMedidasSuporte,
  buscarMedidasEmTempoReal,
  buscarMedidasEmTempoRealSuporte,
};
