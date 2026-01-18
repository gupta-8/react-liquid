import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GlassButton } from "../src";

test("GlassButton clicks", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();

  render(<GlassButton onClick={onClick}>Click</GlassButton>);

  await user.click(screen.getByRole("button", { name: /click/i }));
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("GlassButton loading disables", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();

  render(
    <GlassButton loading onClick={onClick}>
      Save
    </GlassButton>
  );

  const btn = screen.getByRole("button", { name: /save/i });
  expect(btn).toBeDisabled();

  await user.click(btn);
  expect(onClick).toHaveBeenCalledTimes(0);
});