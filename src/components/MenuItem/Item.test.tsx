import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { MenuItem } from ".";

const itemProps = {
  name: "Name",
  description: "Description",
  price: 5.0,
  imageUrl: "string",
};

describe("Item tests", () => {
  it("should render item details", () => {
    render(
      <MenuItem
        name={itemProps.name}
        description={itemProps.description}
        price={itemProps.price}
        imageUrl={itemProps.imageUrl}
      />,
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("£5.00")).toBeInTheDocument();
  });
});
