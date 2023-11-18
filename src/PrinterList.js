import React from "react";
import PrinterListItem from "./PrinterListItem";
import { SearchIcon } from "./Icons";

const printerList = [
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113620",
    base: 2,
    building: "H3",
    room: 202,
    status: "Hoạt động",
    request: 12,
  },
  {
    id: "2113621",
    base: 1,
    building: "B3",
    room: 602,
    status: "Hoạt động",
    request: 98,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113620",
    base: 2,
    building: "H3",
    room: 202,
    status: "Hoạt động",
    request: 12,
  },
  {
    id: "2113621",
    base: 1,
    building: "B3",
    room: 602,
    status: "Hoạt động",
    request: 98,
  },
];

const PrinterList = () => {
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
          <SearchIcon></SearchIcon>
        </div>
      </div>
      <hr className="sm-hr mt-4" />
      {printerList.map((printer, index) => (
        <PrinterListItem
          id={printer.id}
          base={printer.base}
          building={printer.building}
          room={printer.room}
          status={printer.status}
          request={printer.request}
          key={index}
        ></PrinterListItem>
      ))}
    </div>
  );
};

export default PrinterList;
