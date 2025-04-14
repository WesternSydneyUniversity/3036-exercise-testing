import { describe, it } from "vitest";
import { render } from "vitest-browser-react";
import { AdminForm } from "./AdminForm";

describe("AdminForm", () => {
  it("saves data correctly", async () => {
    // TODO: Complete component and test
    // You will need to mock the savePost function
    const { getByText } = render(<AdminForm />);
    // await expect.element(getByText("Hello Vitest!")).toBeInTheDocument();
  });
});
