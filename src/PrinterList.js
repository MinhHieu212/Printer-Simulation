import React, { useEffect, useState } from "react";
import PrinterListItem from "./PrinterListItem";
import { SearchIcon } from "./Icons";
import { getPrinterList } from "./PrinterAPI";

const PrinterList = () => {
  const [printerList, setPrinterList] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const callAPI = async () => {
      const response = await getPrinterList();
      setPrinterList(response.data);
    };
    callAPI();
  }, [refetch]);

  return (
    <div className="Printing w-full px-[10px] max-w-[1280px] bg-[white] shadow-sm  lg:px-[20px] mx-auto pb-10 min-h-[93vh]">
      <h2 className="text-2xl lg:text-3xl font-extrabold mt-3 printing-title border-b-4 border-black pb-2 md:pb-3 text text-black">
        MÔ PHỎNG MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 gap-3 ">
        <div className="w-[96%] mx-auto border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
          <input
            type="text"
            placeholder="Tìm theo ID máy in"
            className="w-[90%] px-3 outline-none border-none"
          />
          <div>
            <SearchIcon></SearchIcon>
          </div>
        </div>
      </div>
      <hr className="sm-hr mt-4" />
      {printerList.map((printer, index) => (
        <PrinterListItem
          key={index}
          printer={printer}
          setRefetch={() => setRefetch(!refetch)}
        ></PrinterListItem>
      ))}
    </div>
  );
};

export default PrinterList;
