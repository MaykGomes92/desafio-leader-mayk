import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IoStorefrontOutline } from "react-icons/io5";
import { RiNumbersLine } from "react-icons/ri";
import { Pagination } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import GameModal from "../GameModal/GameModal"
import GameCard from "../GameCard/GameCard";
import { motion } from "motion/react";

export default function GameTable({ games = [], stores = [] }) {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = React.useState(1)
  const [selectedGame, setSelectedGame] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const [modeGames, setModeGames] = React.useState(false)

  function handleMode() {
    setModeGames(!modeGames)
  }


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

  if (games.length == 0) {
    return (
      <h1 className="text-white">Nada Encontrado!</h1>
    )
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: .5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Button onClick={handleMode} className="my-2 ml-2 cursor-pointer">{modeGames ? 'Mode Table' : 'Mode Card'}</Button>
      {modeGames == true ? (
        <GameCard
          currentGames={currentGames}
          getStoreName={getStoreName}
          handleRowClick={handleRowClick}
        />
      ) : (
        <Table className="rounded-xl overflow-hidden text-sm">
          <TableHeader className="bg-gray-300 dark:bg-gray-800 ">
            <TableRow>
              <TableHead className="">Título</TableHead>
              <TableHead className="flex items-center">Preço Atual $</TableHead>
              <TableHead className="">Preço Original $</TableHead>
              <TableHead className=" flex items-center gap-2">Loja <IoStorefrontOutline /></TableHead>
              <TableHead className="">Desconto %</TableHead>
              <TableHead className="flex items-center gap-2">Nota <RiNumbersLine /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentGames.map((item, index) => (
              <TableRow key={index} onClick={() => handleRowClick(item)}
                className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-200 hover:scale-[1.01] font-semibold">
                <TableCell className="p-4">{item.title}</TableCell>
                <TableCell className="text-green-600">${item.salePrice}</TableCell>
                <TableCell className="text-green-600">${item.normalPrice}</TableCell>
                <TableCell>{getStoreName(item.storeID)}</TableCell>
                <TableCell>{parseFloat(item.savings).toFixed(2)}%</TableCell>
                <TableCell>{item.dealRating}</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      )}

      {totalPages > 1 && (
        <div className="mt-4 flex justify-center">
          <Pagination>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
              >
                Prev
              </button>
              <span className="font-medium text-black dark:text-white">
                Página {currentPage} de {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
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
          getStoreName={getStoreName}
        />
      )}
    </motion.div>
  )
}
