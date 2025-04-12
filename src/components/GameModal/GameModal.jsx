import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import React from 'react'
import { motion } from "motion/react";
export default function GameModal({ selectedGame, open, onClose }) {
  if (!selectedGame) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>{selectedGame.title}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4">
          <img
            src={selectedGame.thumb.replace("capsule_sm_120", "header")}
            alt={selectedGame.title}
            className="rounded-lg shadow-md"
          />

          <div className="w-full space-y-2 text-sm">
            <p><strong>Preço Atual:</strong> ${selectedGame.salePrice}</p>
            <p><strong>Preço Original:</strong> ${selectedGame.normalPrice}</p>
            <p><strong>Desconto:</strong> {parseFloat(selectedGame.savings).toFixed(2)}%</p>
            <p><strong>Histórico de menor preço:</strong> ${selectedGame.historicalLow}</p>

            <a
              href={`https://www.cheapshark.com/redirect?dealID=${selectedGame.dealID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-600 underline"
            >
              🔗 Ver oferta completa
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
