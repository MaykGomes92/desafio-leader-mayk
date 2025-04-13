import React from 'react'

export default function GameCard({currentGames, getStoreName, handleRowClick}) {


  return (
    <div className="grid md:grid-cols-3  grid-cols-1 m-auto gap-5 bg-gray-200 dark:bg-[#101828] p-20 rounded-4xl">
      {currentGames.map((item, index) => (
        <div key={index} onClick={() => handleRowClick(item)}
          className="cursor-pointer flex flex-col  border-4 border-gray-700 rounded-4xl p-10 hover:bg-gray-200 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-200 hover:scale-[1.01] font-semibold">
          <h1 className="p-4 text-center">Título: {item.title}</h1>
          <h1 className="text-green-600">Preço Atual ${item.salePrice}</h1>
          <h1 className="text-green-600">Preço Original ${item.normalPrice}</h1>
          <h1>Loja: {getStoreName(item.storeID)}</h1>
          <h1>Desconto % {parseFloat(item.savings).toFixed(2)}%</h1>
          <h1>Nota: {item.dealRating}</h1>
        </div>
      ))}
    </div>
  )
}
