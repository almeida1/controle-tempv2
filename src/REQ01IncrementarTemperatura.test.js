import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona";

test("CT01- verifica o estado do contador na inicializacao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toBe(0);
});
test("CT02- o valor do contador deve incrementar de 1 no click do botao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando clico no botao de incremento
  const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
  fireEvent.click(btnIncrementa);
  //entao o valor do contador deve ser 1
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(1);
});
test("CT03- o valor do contador deve decrementar de 1 no click do botao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando clico no botao de decremento
  const btnDecrementa = screen.getByRole("button", { name: "Decremento" });
  fireEvent.click(btnDecrementa);
  //entao o valor do contador deve ser -1
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(-1);
});
test("CT04 - o botao reset deve registrar zero quando pressionado", () => {
  render(<Adiciona />);
  const btnReset = screen.getByText("Reset");
  fireEvent.click(btnReset);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(btnReset).toBeTruthy();
  expect(valorContador).toEqual(0);
});
