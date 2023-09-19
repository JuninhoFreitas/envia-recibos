const fs = require('fs');
const csv = require('csv-parser');
const { prepareMail } = require('.');

const results = [];
const timer = ms => new Promise(res => setTimeout(res, ms))
fs.createReadStream('example.csv')
  .pipe(csv({ separator: ';' })) // Defina o separador correto
  .on('data', (data) => {
    results.push(data);
  })
  .on('end', async () => {
    // Agora 'results' contém os dados da planilha
    console.log('Dados extraídos da planilha:');
    
    //use column Senha as index and accumulate the repeated values
    const grouped = results.reduce((acc, curr) => {
      if (!acc[curr.Senha]) {
        acc[curr.Senha] = [];
      }
      acc[curr.Senha].push(curr);
      return acc;
    }, {});

    const groupedArray = Object.keys(grouped).map((senha) => {
      return {
        senha,
        history: grouped[senha],
      };
    });

    // for (const item of groupedArray) {
    //   prepareMail(item);
    // }
    // prepareMail(groupedArray[0]);
    for(let i = 0; i < groupedArray.length; i++){
      
      //wait a second to avoid outlook block
      console.log('teste')
      
      prepareMail(groupedArray[i]);
      await timer(5000);
    }
  });
