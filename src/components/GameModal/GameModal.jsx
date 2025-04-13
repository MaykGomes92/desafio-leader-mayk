import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import React from 'react'
import { motion } from "motion/react";
import { api } from "../../urlApi";


export default function GameModal({ selectedGame, open, onClose }) {

  const [historical, setHistorical] = React.useState()
  React.useEffect(() => {
    async function handleHistoricalPrice() {
      let response = await api.get(`/games?id=${selectedGame.gameID}`)
      setHistorical(response.data)
    }
    handleHistoricalPrice()
  }, [selectedGame])


  if (!selectedGame) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>{selectedGame.title}</DialogTitle>
        </DialogHeader>

        <motion.div
          className="flex flex-col items-center p-4 gap-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <img
            src={selectedGame.thumb.replace("capsule_sm_120", "header")}
            alt={selectedGame.title}
            className="rounded-lg shadow-md mt-4"
          />

          <div className="w-full space-y-2 text-sm">
            <p><strong>Preço Atual:</strong> ${selectedGame.salePrice}</p>
            <p><strong>Preço Original:</strong> ${selectedGame.normalPrice}</p>
            <p><strong>Desconto:</strong> {parseFloat(selectedGame.savings).toFixed(2)}%</p>
            <p><strong>Histórico de menor preço:</strong> ${historical.cheapestPriceEver.price}</p>

            <a
              href={`https://www.cheapshark.com/redirect?dealID=${selectedGame.dealID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-600 underline"
            >
              🔗 Ver oferta completa
            </a>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
