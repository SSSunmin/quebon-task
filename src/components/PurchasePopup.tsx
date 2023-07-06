"use client";
import { Modal, ModalBackGround } from "@/styled-components/styled-components";
import { ReactNode } from "react";

interface PopupProps {
  children: ReactNode;
}
const PurchasePopup = ({ children }: PopupProps) => {
  return (
    <ModalBackGround>
      <Modal>{children}</Modal>
    </ModalBackGround>
  );
};

export default PurchasePopup;
