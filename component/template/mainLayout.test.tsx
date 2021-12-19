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
    console.log("[COZE_LOG] expect(header)", expect(header));
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MaisonJ's playground");

    const posts = screen.getByText("Posts");
    const about = screen.getByText("About");
    expect(posts).toBeInTheDocument();
    expect(about).toBeInTheDocument();

    // search input

    //storybook
    // cypress (in 공홈 testing)

    // 반응형 지원, 테스트?
    // 이미지 relative하게 가져올 수 없나?
    // 이 블로그의 스펙도 about에 넣을 수 있도록
    //
  });
});
