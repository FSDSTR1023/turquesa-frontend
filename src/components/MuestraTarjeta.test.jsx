import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import MuestraTarjeta from "./MuestraTarjeta";

describe("MuestraTarjeta", () => {
  beforeEach(() => {
    render(
      <MuestraTarjeta tarjeta={{nombre:"algo"}} />
    );
  });
  afterEach(() => {
    cleanup();
  });

  // it("Renderiza la tarjeta", () => {
  //   screen.debug();
  //   expect(screen.getByTestId("muestraTarjetaTesting"));
  // });

  it("Renderiza el botón", () => {
    expect(screen.getByText("Ver tarjeta"));
  });

  it("Renderiza la imagen", () => {
    expect(screen.getByAltText("Imagen tarjeta"));
  });

  it("Renderiza los datos de la tarjeta que se le pasa", () => {
    expect(screen.getByText("algo"));
  });


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