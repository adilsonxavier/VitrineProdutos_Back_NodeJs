
const express = require("express");
const app = express();

const routes = require("./routes")

app.use(express.json());
app.use(routes);


// 404 not found
app.use((req,res,next)=>{
    const error = new Error("Not Found"); // Obs: a classe error está em node_modules e só recebe
                                        // uma string (mensagem)
    error.status = 404;     
    next(error);
 });
  

app.use((error,req,res,next)=>{   // Normalmente tem os params req,res,e next . Se houver 4 então p
                                  // primeiro é um objeto de erro que dispara automaticamente quando
                                  // ocorrer um erro
    res.status(error.status || 500) ; // o error.status pode ser 404 ( por exemplo)
    res.json({errorPego: error.message});
});

app.listen(3333,()=> console.log("porta 3333"));
