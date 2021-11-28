/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import MainLayout from "./mainLayout";

describe("Home", () => {
  it("renders necessaries", () => {
    render(<MainLayout />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MaisonJ's playground");

    const posts = screen.getByText("Posts");
    const about = screen.getByText("About");
    expect(posts).toBeInTheDocument();
    expect(about).toBeInTheDocument();

    // search input

    //storybook
    // cypress (in 공홈 testing)
  });
});
