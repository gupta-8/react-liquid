import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../utils/cn";
import { GlassSurface } from "./GlassSurface";

export const GlassModal = Dialog.Root;
export const GlassModalTrigger = Dialog.Trigger;
export const GlassModalClose = Dialog.Close;

export function GlassModalContent({
  className,
  title,
  description,
  children,
  ...props
}: Dialog.DialogContentProps & {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="rl-overlay" />
      <Dialog.Content className={cn("rl-modalWrap", className)} {...props}>
        <GlassSurface className="rl-modal" intensity="strong" radius={22} glow border noise highlight>
          {(title || description) && (
            <header className="rl-modal__header">
              {title ? <Dialog.Title className="rl-modal__title">{title}</Dialog.Title> : null}
              {description ? (
                <Dialog.Description className="rl-modal__desc">{description}</Dialog.Description>
              ) : null}
            </header>
          )}
          <div className="rl-modal__body">{children}</div>
        </GlassSurface>
      </Dialog.Content>
    </Dialog.Portal>
  );
}