import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { PostFilter } from "./PostFilter";

// TODO: you will have to mock the redirection

describe("PostFilter", () => {
  it("Redirects to correct url", () => {
    // TODO: Complete component and test
    render(<PostFilter posts={[]} />);

    // expect(screen.getByText("1 post")).toBeInTheDocument();
  });
});
