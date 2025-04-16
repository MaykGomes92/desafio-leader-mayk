import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TableCell } from "@/components/ui/table";

export default function ToggleFavorites({ gameID, favorites, toggleFavorite }) {
  const isFavorited = favorites.includes(gameID);

  return (
    <TableCell className="text-center" onClick={(e) => {
      e.stopPropagation();
      toggleFavorite(gameID);
    }}>
      {isFavorited ? (
        <FaHeart className="text-red-500 cursor-pointer" />
      ) : (
        <FaRegHeart className="text-gray-500 cursor-pointer" />
      )}
    </TableCell>
  );
}
