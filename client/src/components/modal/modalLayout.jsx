import React from "react";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import close from "../../assets/icons/close.svg";

export default function ModalLayout({ header, children, isOpen, handleOpen }) {
  return (
    <Dialog open={isOpen} handler={handleOpen} className="px-3 py-2">
      <DialogHeader className="center justify-between w-full pb-1 pt-3 ">
        <h1 className="text-2xl font-semibold text-black">{header}</h1>
        <div
          className="hover:bg-blue-gray-50 cursor-pointer rounded-full object-contain p-1"
          onClick={handleOpen}
        >
          <img src={close} />
        </div>
      </DialogHeader>
      <DialogBody>{children}</DialogBody>
    </Dialog>
  );
}
