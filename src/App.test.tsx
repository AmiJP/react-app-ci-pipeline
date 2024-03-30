import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("App component tests", () => {
  it("should render the App component", () => {
    render(<App />);
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });

  it("when the button 1 is clicked, the count should increase by 1", async () => {
    render(<App />);

    expect(screen.getByText("Count is: 0")).toBeInTheDocument();

    const button = screen.getByTestId("btn-counter1");
    act(() => {
      button.click();
    });

    await waitFor(() => {
      expect(screen.getByText("Count is: 1")).toBeInTheDocument();
    });
  });

  it("when the button 5 is clicked, the count should increase by 5", async () => {
    render(<App />);

    expect(screen.getByText("Count is: 0")).toBeInTheDocument();

    const button = screen.getByTestId("btn-counter5");
    act(() => {
      button.click();
    });

    await waitFor(() => {
      expect(screen.getByText("Count is: 5")).toBeInTheDocument();
    });
  });
});
