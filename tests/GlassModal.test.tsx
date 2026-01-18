import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GlassModal, GlassModalTrigger, GlassModalContent } from "../src";

test("GlassModal opens and shows content", async () => {
  const user = userEvent.setup();

  render(
    <GlassModal>
      <GlassModalTrigger asChild>
        <button>Open</button>
      </GlassModalTrigger>
      <GlassModalContent title="Hello" description="World">
        <div>Inside</div>
      </GlassModalContent>
    </GlassModal>
  );

  await user.click(screen.getByRole("button", { name: /open/i }));
  expect(await screen.findByText("Inside")).toBeInTheDocument();
  expect(screen.getByText("Hello")).toBeInTheDocument();
});