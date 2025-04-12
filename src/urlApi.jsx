import axios from "axios";

// Filtrar Tudo = https://www.cheapshark.com/api/1.0/deals
// Filtrar por idLoja = https://www.cheapshark.com/api/1.0/deals?storeID=1
// Filtrar por preço = https://www.cheapshark.com/api/1.0/deals?lowerPrice=10&upperPrice=30
// Filtrar por desconto minimo = https://www.cheapshark.com/api/1.0/deals?minDiscount=40

/*
Usar o parâmetro sortBy=Price com uma dessas opções:

  Price	       ---- Ordena por preço atual
  Savings      ----	Ordena pela % de desconto
  DealRating	 ---- Ordena por nota do negócio
  Title	       ---- Ordena por nome do jogo
  Metacritic	 ---- Ordena por nota no Metacritic
*/

export const api = axios.create({
  baseURL: "https://www.cheapshark.com/api/1.0",
});

// export function FILTER_LOWERPRICE(lowerPrice){
//   return {
//     url: `${baseUrl}?lowerPrice=${lowerPrice}&sortBy=Price`
//   }
// }

// export function FILTER_UPPERPRICE(upperPrice){
//   return {
//     url: `${baseUrl}?upperPrice=${upperPrice}&sortBy=Price&desc=1`
//   }
// }
