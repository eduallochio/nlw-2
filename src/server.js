//servidor
const express = require('express')
const server = express()
const { pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses 
     }  = require('./page')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
     express: server,
     noCache: true,
})

//Inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
// configurar arquivos estáticos (css, scripts, imagens)
 .use(express.static("public"))
 // rotas da aplicação
 .get("/", pageLanding)
 .get("/study", pageStudy)
 .get("/give-classes", pageGiveClasses) 
 .post("/save-classes", saveClasses)
 //start do servidor (que as vezes funciona as vezes não rsrsrsr)
 .listen(5500)

