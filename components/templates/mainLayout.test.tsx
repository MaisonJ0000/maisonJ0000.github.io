/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import MainLayout from "./mainLayout";

describe("Home", () => {
  it("renders necessaries", () => {
    render(<MainLayout />);

    // const header = screen.getByRole("banner");
    // expect(header).toBeInTheDocument();
    // expect(header).toHaveTextContent("MaisonJ's playground");

    // about
    // posts
    // search input

    //storybook
    // cypress (in 공홈 testing)
  });
});
