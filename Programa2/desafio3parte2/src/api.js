import axios from 'axios';
/*
O axios é uma biblioteca usada para realizar requisições HTTP em aplicações JavaScript, tanto no front-end quanto no back-end. Ele permite fazer chamadas GET, POST, PUT,
 DELETE, etc., de forma simplificada.

Para instalar o Axios, use o seguinte comando: 
npm install axios react-router-dom
*/

const API_URL = 'https://run.mocky.io/v3/eec148bd-be51-45f9-9584-f20f00e9fbdb';//A constante API_URL armazena o endpoint de uma API fictícia (fornecida pelo Mocky). Esse é o endereço para onde a requisição HTTP será enviada.

export const fetchProducts = async () => {//Esta função foi declarada como async para que possa usar await internamente, permitindo que a execução do código "espere" pela resposta da API sem bloquear o restante da aplicação
  try {//A função tenta fazer uma requisição HTTP do tipo GET para a URL armazenada em API_URL.
    const response = await axios.get(API_URL);//A palavra-chave await faz com que a execução "pause" até que a resposta seja recebida.
    return response.data;//Se a requisição for bem-sucedida, o resultado estará disponível em response.data, que contém os dados retornados pela API.
  } catch (error) {//Se ocorrer algum erro durante a requisição (por exemplo, a API estiver fora do ar), ele será capturado aqui e exibido no console com uma mensagem de erro.
    console.error('Error fetching data:', error);
  }
};

/*
Explicação do JSON 

[
  {
    "id": "1", // Identificador único do produto
    "name": "TMA-HD Wireless", // Nome do produto
    "category": "headsets", // Categoria do produto (ex: headsets, headphones)
    "price": 150.00, // Preço do produto em dólares
    "details": "A high-quality wireless headset with noise-canceling technology and ergonomic design for long listening sessions.", 
    // Descrição detalhada do produto, incluindo principais recursos e características
    "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg", 
    // URL para imagem ilustrativa do produto
    "reviews": [ 
      // Lista de avaliações dos usuários sobre o produto
      {
        "userId": "user101", // Identificador único do usuário que fez a avaliação
        "userName": "John Brown", // Nome do usuário
        "rating": 5, // Nota dada ao produto (de 1 a 5)
        "comment": "Amazing sound quality and super comfortable to wear!", 
        // Comentário descrevendo a experiência com o produto
        "postedAt": "2025-01-05" // Data da avaliação
      },
      {
        "userId": "user102",
        "userName": "Emily Doe",
        "rating": 4,
        "comment": "Great features, but the battery life could be longer.",
        "postedAt": "2025-01-10"
      }
    ],
    "popularity": 85, // Indicador de popularidade do produto (pode representar um índice calculado com base em vendas ou avaliações)
    "createdAt": "2024-12-25" // Data de criação/cadastro do produto no sistema
  }
]

*/