import { describe, expect, it } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import App from "../App";

const queryClient = new QueryClient();

describe("App tests", () => {
  it("should render the mock data", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const testItem = await screen.findByText("TestItem");

    expect(testItem).toBeInTheDocument();
  });
});
