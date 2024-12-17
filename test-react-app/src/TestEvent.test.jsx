// TestEvent.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestEvent from "./TestEvent";

describe("TestEvent component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<TestEvent />);
    expect(container).toMatchSnapshot();
    
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<TestEvent />);
    screen.debug();
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
