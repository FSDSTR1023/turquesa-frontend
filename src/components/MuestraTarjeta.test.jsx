import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MuestraTarjeta } from "./MuestraTarjeta";

describe("MuestraTarjeta", () => {
  const onClickFunction = vi.fn();
  beforeEach(() => {
    render(
      <MuestraTarjeta />
    );
  });
  afterEach(() => {
    cleanup();
  });

  it("Renderiza la tarjeta", () => {
    expect(screen.getByClass("muestraTarjetaContenedor").toBeDefined());
  });

//   it("renders the text of the button", () => {
//     expect(screen.getByRole("button")).toHaveTextContent("Text of the button");
//   });
//   //this test is using React testing library with vitest
//   it("executes the onClick function when clicked", () => {
//     screen.getByRole("button").click();
//     expect(onClickFunction).toHaveBeenCalled();
//   });
//   it("is disabled when disabled is true", () => {
//     render(
//       <Button onClick={onClickFunction} disabled>
//         Disabled button
//       </Button>
//     );
//     expect(screen.queryByText("Disabled button")).toBeDisabled();
//   });

//   it("is blue class is primary", () => {
//     expect(screen.queryByText(/Text of the button/i)).toHaveClass("primary");
//   });

//   it("when outlined is true, it has the outlined class", () => {
//     expect(screen.getByTestId("root-button")).toHaveClass("outlined");
//   });

//   it("an icon is shown when icon is passed", () => {
//     screen.queryByText("👍");
//   });
});