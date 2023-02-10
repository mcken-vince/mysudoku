import { Dispatch, SetStateAction } from "react";
import { squareType } from "./Game";

export const keyUpListenerLogic = (event: KeyboardEvent, setSelectedSquare: Dispatch<SetStateAction<squareType | null>>) => {
  if (event.code === "ArrowRight") {
    setSelectedSquare((prev) => {
      if (!prev) return prev;
      let newColumnValue: number = prev.col + 1;
      if (newColumnValue > 8) newColumnValue = 0;
      return { ...prev, col: newColumnValue };
    });
  }
  if (event.code === "ArrowLeft") {
    setSelectedSquare((prev) => {
      if (!prev) return prev;
      let newColumnValue: number = prev.col - 1;
      if (newColumnValue < 0) newColumnValue = 8;
      return { ...prev, col: newColumnValue };
    });
  }
  if (event.code === "ArrowUp") {
    setSelectedSquare((prev) => {
      if (!prev) return prev;
      let newRowValue: number = prev.row - 1;
      if (newRowValue < 0) newRowValue = 8;
      return { ...prev, row: newRowValue };
    });
  }
  if (event.code === "ArrowDown") {
    setSelectedSquare((prev) => {
      if (!prev) return prev;
      let newRowValue: number = prev.row + 1;
      if (newRowValue > 8) newRowValue = 0;
      return { ...prev, row: newRowValue };
    });
  }
};