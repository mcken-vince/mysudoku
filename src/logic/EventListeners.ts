import { Dispatch, SetStateAction } from "react";
import { squareType } from "./Game";

export const keyUpListenerLogic = (
  event: KeyboardEvent,
  setSelectedSquare: Dispatch<SetStateAction<squareType | null>>,
  handleValueChange: (row: number, col: number, value: number) => void
) => {
  switch (event.code) {
    case "ArrowRight":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        let newColumnValue: number = prev.col + 1;
        if (newColumnValue > 8) newColumnValue = 0;
        return { ...prev, col: newColumnValue, value: 0 };
      });
      break;

    case "ArrowLeft":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        let newColumnValue: number = prev.col - 1;
        if (newColumnValue < 0) newColumnValue = 8;
        return { ...prev, col: newColumnValue, value: 0 };
      });
      break;

    case "ArrowUp":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        let newRowValue: number = prev.row - 1;
        if (newRowValue < 0) newRowValue = 8;
        return { ...prev, row: newRowValue, value: 0 };
      });
      break;

    case "ArrowDown":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        let newRowValue: number = prev.row + 1;
        if (newRowValue > 8) newRowValue = 0;
        return { ...prev, row: newRowValue, value: 0 };
      });
      break;

    case "Backspace":
    case "Delete":
    case "Digit0":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 0);
          return { ...prev, value: 0 };
        }
        return prev;
      });

      break;

    case "Digit1":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 1);
          return { ...prev, value: 1 };
        }
        return prev;
      });

      break;

    case "Digit2":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 2);
          return { ...prev, value: 2 };
        }
        return prev;
      });

      break;

    case "Digit3":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 3);
          return { ...prev, value: 3 };
        }
        return prev;
      });

      break;

    case "Digit4":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 4);
          return { ...prev, value: 4 };
        }
        return prev;
      });

      break;

    case "Digit5":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 5);
          return { ...prev, value: 5 };
        }
        return prev;
      });

      break;

    case "Digit6":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 6);
          return { ...prev, value: 6 };
        }
        return prev;
      });

      break;

    case "Digit7":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 7);
          return { ...prev, value: 7 };
        }
        return prev;
      });

      break;

    case "Digit8":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 8);
          return { ...prev, value: 8 };
        }
        return prev;
      });

      break;
      
    case "Digit9":
      setSelectedSquare((prev) => {
        if (!prev) return prev;
        if (prev.changeable) {
          handleValueChange(prev.row, prev.col, 9);
          return { ...prev, value: 9 };
        }
        return prev;
      });

      break;
    default:
      break;
  }
};
