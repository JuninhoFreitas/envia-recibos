const {sendMail} = require("./mailer");



(async ()=>{
    
    await sendMail({html: '', from: 'brizollajr01@outlook.com', sender: 'brizollajr01@outlook.com', to: 'brizollajr@gmail.com', subject: 'Recibo de contribuição'})
})()