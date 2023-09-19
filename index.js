const fs = require("fs");
const { sendMail } = require("./mailer");

const template_html = fs.readFileSync("template.html", "utf8");

const makeHTML = async (replacements) => {
  const html = replaceVariables(template_html, replacements);
  await sendMail({html: html, to: replacements.email, subject: 'Recibo de contribuição'});
  setTimeout(() => {}, 1000);
  fs.writeFile(
    `mails/recibo-senha-${replacements.senha}.html`,
    html,
    "utf8",
    (err) => {
      if (err) {
        console.error("Erro ao escrever o arquivo HTML modificado:", err);
      } else {
        console.log("Variáveis substituídas com sucesso.");
      }
    }
  );
};

// Função para substituir as variáveis no HTML
function replaceVariables(html, replacements) {
  for (const key in replacements) {
    const regex = new RegExp(`{{${key}}}`, "g");
    html = html.replace(regex, replacements[key]);
  }
  return html;
}

function prepareHistory(history) {
  const more_than_one =
    history.length > 1 ? "<div>Seu histórico de contribuições:</div>" : "";
  let final = `${more_than_one}
    
    `;
  const historyTemplate = `
        <div></div>
        <span>{{data_pagamento}} - R$ {{valor_pago}} - {{data_pagamento}}</span>
    `;
  const history_after_first = history.slice(1, 4);

  for (const item of history_after_first) {
    const replaced = prepareReplacements(item);
    const html = replaceVariables(historyTemplate, replaced);
    final += html;
  }

  return final;
}

function prepareReplacements(data) {
  return {
    nome_pessoa: data.Senha,
    senha: data.Senha,
    forma_de_pagamento: data.Modo,
    valor_pago: data.Valor,
    data_pagamento: data["Data de compensação"],
  };
}

module.exports = {
  prepareMail: (data) => {
    const history = prepareHistory(data.history);
    const actual = data.history[0];
    const replacements = prepareReplacements(actual);
    replacements.email = 'brizollajr@gmail.com'
    replacements.historico_contribuicoes = history;
    makeHTML(replacements);
  },
};
