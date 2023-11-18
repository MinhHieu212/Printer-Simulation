import React, { useState } from "react";
import CenterModal from "./CenterModal";

const ConfirmPrintingModal = ({ children, props }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const data = {
    CurrentName: "HelloWorld.c++",
    CurrentStatus: "Đang in",
    Queue: ["dstt.pptx", "cnpm.pdf"],
  };

  const Next = () => {
    //call API
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[571px] overflow-hidden rounded-lg  border-[1px] border-[#367FA9] text-[18px] md:text-[18px]">
          <div className="header bg-[#e6e6e6] text-[20px] font-bold flex items-center justify-center h-[60px] w-full shadow-lg">
            HOẠT ĐỘNG CỦA MÁY IN
            <span className="text-[blue] ml-2">{props.id}</span>
          </div>
          <div className="mx-auto gap-y-2 flex flex-col px-3 py-5 font-bold">
            <div className="flex gap-2 px-2  items-start">
              <span className="text-[blue] font-bold w-[30%]">FileName</span>
              <div className="border border-black w-[70%] shadow-lg rounded-md p-2">
                <p>{data?.CurrentName}</p>
              </div>
            </div>
            <div className="flex gap-2 px-2 items-start">
              <span className="text-[blue] font-bold w-[30%]">Status</span>
              <div className="border border-black w-[70%] shadow-lg rounded-md p-2">
                <p>{data?.CurrentStatus}</p>
              </div>
            </div>
            <div className="flex gap-2 px-2 items-start">
              <span className="text-[blue] font-bold w-[30%]">Queue</span>
              <div className="border border-black w-[70%] shadow-lg h-[200px] rounded-md p-2">
                {data?.Queue.map((file, index) => {
                  return <p key={index}>{file}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-4">
            <button
              className="bg-[#e0e0e0] shadow-lg p-2 w-[90%] block rounded-lg border border-black text-[16px] md:text-[18px] text-[blue] font-semibold "
              onClick={Next}
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
