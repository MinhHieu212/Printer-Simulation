import React, { useState } from "react";
import CenterModal from "./CenterModal";
import { nextPrinterButton } from "./PrinterAPI";

const ConfirmPrintingModal = ({ children, printer, setRefetch = () => {} }) => {
  const [openModal, setOpenModal] = useState(false);
  const printingQueue = printer.printingQueue;
  const printingJob = printer.printingJob;
  const [isBlock, setIsBlock] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleNextAction = async () => {
    setIsBlock(true);
    try {
      const response = await nextPrinterButton({
        printerId: printer?.printerId,
      });
      console.log(
        "---------------------------RESPONSE of NEXT API---------------------",
        response
      );
    } catch (errors) {
      console.log(errors);
    }

    setRefetch();
    setIsBlock(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[571px] overflow-hidden rounded-lg  border-[1px] border-[#367FA9] text-[18px] md:text-[18px]">
          <div className="header bg-[#e6e6e6] text-[20px] font-bold flex items-center justify-center h-[60px] w-full shadow-lg">
            HOẠT ĐỘNG CỦA MÁY IN
            <span className="text-[blue] ml-2">{}</span>
          </div>
          <div className="mx-auto gap-y-2 flex flex-col px-3 py-5 font-bold">
            <div className="flex gap-2 px-2  items-start">
              <span className="text-[blue] font-bold w-[30%]">FileName</span>
              <div className="border border-black w-[70%]  h-[50px] shadow-lg rounded-md p-2 overflow-hidden">
                {printingJob[0]?.document?.title || "..."}
              </div>
            </div>
            <div className="flex gap-2 px-2 items-start">
              <span className="text-[blue] font-bold w-[30%]">Status</span>
              <div className="border border-black w-[70%] shadow-lg h-[50px] rounded-md p-2  overflow-clip">
                <p>{printingJob[0]?.status || "..."}</p>
              </div>
            </div>
            <div className="flex gap-2 px-2 items-start">
              <span className="text-[blue] font-bold w-[30%]">Queue</span>
              <div className="border border-black w-[70%] shadow-lg h-[200px] rounded-md p-2 overflow-scroll">
                {printingQueue?.map((file, index) => {
                  return <p key={index}>{file?.document?.title}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-4">
            <button
              className={`bg-[#e0e0e0] shadow-lg p-2 w-[90%] block rounded-lg border border-black text-[16px] md:text-[18px] text-[blue] font-semibold ${
                isBlock ? "bg-[#a0a0a0]" : ""
              }`}
              onClick={handleNextAction}
              disabled={isBlock}
            >
              Next
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default ConfirmPrintingModal;
