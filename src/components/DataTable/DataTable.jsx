import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination } from "@/components/ui/pagination"
import GameModal from "../GameModal/GameModal"

export default function GameTable({ games = [], stores = [] }) {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = React.useState(1)
  const [selectedGame, setSelectedGame] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const totalPages = Math.ceil(games.length / itemsPerPage)

  const currentGames = games.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleRowClick = (game) => {
    setSelectedGame(game)
    setOpen(true)
  }

  const getStoreName = (storeID) => {
    return stores.find((store) => store.storeID === storeID)?.storeName || "Desconhecida"
  }

  return (
    <div>
      <Table className="text-sm text-gray-400 bg-gray-900 rounded-xl overflow-hidden">
        <TableHeader className="bg-gray-800 text-gray-300">
          <TableRow>
            <TableHead className=" text-gray-300">Título</TableHead>
            <TableHead className=" text-gray-300">Preço Atual</TableHead>
            <TableHead className=" text-gray-300">Preço Original</TableHead>
            <TableHead className=" text-gray-300">% Desconto</TableHead>
            <TableHead className=" text-gray-300">Loja</TableHead>
            <TableHead className=" text-gray-300">Nota</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentGames.map((item, index) => (
            <TableRow key={index} onClick={() => handleRowClick(item)} className="cursor-pointer hover:bg-gray-700 hover:shadow-md transition-all duration-200 hover:scale-[1.01] text-white">
              <TableCell className="p-4">{item.title}</TableCell>
              <TableCell className="text-green-400">${item.salePrice}</TableCell>
              <TableCell className="text-green-400">${item.normalPrice}</TableCell>
              <TableCell>{parseFloat(item.savings).toFixed(2)}%</TableCell>
              <TableCell>{getStoreName(item.storeID)}</TableCell>
              <TableCell>{item.dealRating}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>

      {totalPages > 1 && (
        <div className="mt-4 flex justify-center">
          <Pagination>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
              >
                Prev
              </button>
              <span className="font-medium text-white">
                Página {currentPage} de {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
              >
                Next
              </button>
            </div>
          </Pagination>
        </div>
      )}

      {selectedGame && (
        <GameModal
          selectedGame={selectedGame}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}
