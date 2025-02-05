// Importa as bibliotecas React, hooks 'useEffect' e 'useState', além da função 'fetchProducts' da API
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import vector_icon from './assets/Vector.png'
import shopping_icon from './assets/shopping-cart.png'
import sliders_icon from './assets/sliders.png'
import './app.css'
function App() {
  // Declaração do estado 'products', que armazena a lista de produtos; inicia com um array vazio
  const [products, setProducts] = useState([]);

  // Hook 'useEffect' para carregar os produtos assim que o componente for montado
  useEffect(() => {
    // Função assíncrona para buscar os dados da API e atualizar o estado
    const getProducts = async () => {
      const data = await fetchProducts(); // Chamada à API para buscar os produtos
      setProducts(data); // Atualiza o estado com os dados recebidos
    };

    getProducts(); // Chama a função ao carregar o componente
  }, []); // A lista vazia de dependências garante que o efeito rode apenas uma vez

  return (
    <div className="p-4">
      {/* Título principal da página */}
      <div className='icons'>
        <img src={vector_icon} style={{ width: '23px', height: '23px', position: 'absolute', left: '10px', top: '10px' }} />
        <img src={shopping_icon} style={{ width: '24px', height: '24px', position: 'absolute', right: '10px', top: '10px' }} />
      </div>
      <div className='start'>
        <p id='prod'>All Products</p>
      </div>
      <br></br>
      <div className="filter">
        <p id='slider'><img src={sliders_icon} style={{width:'20px', height:'20px'}}></img> Filter</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/* Grade responsiva para exibir os produtos */}
      <div className="produtos">
        {/* Itera sobre a lista de produtos para renderizar cada item */}
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-md">
            {/* Imagem do produto */}
            <img className="imagem" src={product.img} alt={product.name} />

            {/* Nome do produto */}
            <h2 className="text-xl font-semibold">{product.name}</h2>

            {/* Preço formatado com duas casas decimais */}
            <p className="font-bold mt-2">${product.price.toFixed(2)}</p>

            {/* Popularidade do produto */}
            <div className="text-sm text-gray-500">Popularity: {product.popularity}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
