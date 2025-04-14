import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { PostList } from "./PostList";

// TODO: you will have to mock the redirection

describe("PostFilter", () => {
  it("Redirects to correct url", () => {
    // TODO: Complete component and test
    render(<PostList posts={[]} />);

    // expect(screen.getByText("1 post")).toBeInTheDocument();
  });
});
