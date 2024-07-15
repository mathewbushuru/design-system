import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import App from "@/App";

describe("<App />", () => {
  afterEach(cleanup);

  it("renders Home page", () => {
    const result = render(<App />);
    const homepage = result.getByTestId("home-page");
    expect(homepage).toBeInTheDocument();
  });

  it("navigates to Examples page", () => {
    const result = render(<App />);
    const examplesLink = result.getByText("Examples");
    fireEvent.click(examplesLink);
    expect(screen.getByTestId("examples-page")).toBeInTheDocument();
  });

  it("navigates to Animations page", () => {
    const result = render(<App />);
    const animationsLink = result.getByText("Animations");
    fireEvent.click(animationsLink);
    expect(screen.getByTestId("animations-page")).toBeInTheDocument();
  });

  it("navigates to Composites page", () => {
    const result = render(<App />);
    const compositesLink = result.getByText("Component Composites");
    fireEvent.click(compositesLink);
    expect(screen.getByTestId("composites-page")).toBeInTheDocument();
  });

  it("navigates to Primitives page", () => {
    const result = render(<App />);
    const primitivesLink = result.getByText("Component Primitives");
    fireEvent.click(primitivesLink);
    expect(screen.getByTestId("primitives-page")).toBeInTheDocument();
  });
});
