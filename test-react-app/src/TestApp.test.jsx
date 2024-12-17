import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TestApp from "./TestApp";

describe("TestApp component", () => {
  it("renders correct heading", () => {
    render(<TestApp />);
    expect(screen.getByRole("heading", { name: "Our First Test" }));
  });
});