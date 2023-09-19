const fs = require('fs');

// Defina as variáveis que você deseja substituir
const replacements = {
  nome_pessoa: 'Nome da Pessoa',
  forma_de_pagamento: 'Forma de Pagamento',
  valor_pago: '100,00',
  data_pagamento: '01/09/2023',
};

// Leia o arquivo HTML
fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo HTML:', err);
    return;
  }

  // Substitua as variáveis no HTML
  const html = replaceVariables(data, replacements);

  // Escreva o HTML modificado de volta no arquivo
  fs.writeFile('seu-arquivo-modificado.html', html, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo HTML modificado:', err);
    } else {
      console.log('Variáveis substituídas com sucesso.');
    }
  });
});

// Função para substituir as variáveis no HTML
function replaceVariables(html, replacements) {
  for (const key in replacements) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    html = html.replace(regex, replacements[key]);
  }
  return html;
}
