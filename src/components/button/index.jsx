import React from "react";
import { Button } from "./styles"; // Importa os estilos do botão
import { children } from "react";

function DefaultButton({ children, onClick }) {
  return (
  <Button onClick={onClick} >{children}</Button>

)
}

export default DefaultButton;