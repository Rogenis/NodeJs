import express from "express";
const server = express();

server.use(express.json());

let customers = [
  { id: 1, name: "Dev Samurai", site: "https//devsamurai.com.br" },
  { id: 2, name: "Google", site: "https//google.com.br" },
  { id: 3, name: "Rógenis", site: "https//rogenis.com.br" }
]

// Lista todos os custormers
server.get("/custormers", (req, res) => {
  return res.json(customers)
})

// Lista um custormer pelo seu ID
server.get("/custormers/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Verifica se há um customer com o ID correspondente. 
  const customer = customers.find(item => item.id === id)

  const status = customer ? 200 : 404;
  return res.status(status).json(customer)
})

// Inserção de registro
server.post("/custormers", (req, res) => {
  const { name, site } = req.body;

  // Verifica o próximo ID a ser inserido, pois os dados são mockados.
  const nextId = customers[customers.length - 1].id + 1;

  // Adiciona um novo customer na lista de objetos
  const newCustomer = { id: nextId, name, site }
  customers.push(newCustomer)

  return res.status(201).json(newCustomer)
})


server.listen(3000);