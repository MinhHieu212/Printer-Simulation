import SpssAPI from "./SpssAPI";

const path1 = "/v1/printer/printers";

export const getPrinterList = async (filterParams = {}) => {
  const responseFilterParams = await SpssAPI.get(path1, {
    params: { ...filterParams, per_page: 100 },
  })
    .then((response) => {
      // console.log("Response from PrintersAPI", response);
      return response?.data;
    })
    .catch((error) => {
      // console.log("Fail get PrintersAPI", error);
      return error;
    });

  return responseFilterParams;
};

export const nextPrinterButton = async (data = {}) => {
  const path2 = "/v1/printer/next";
  try {
    const response = await SpssAPI.patch(path2, data);
    console.log("Response from Printers Action", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to get Printers Action", error);
    throw error;
  }
};

// export const nextPrinterButton = async (PrinterParams = {}) => {
//   const path2 = "/v1/printer/next"; // Replace with your actual API endpoint

//   try {
//     const response = await fetch(path2, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(PrinterParams),
//     });

//     if (!response.ok) {
//       // Check if the response status is not okay (e.g., 404, 500, etc.)
//       throw new Error(
//         `Failed to get Printers Action. Status: ${response.status}`
//       );
//     }

//     const responseData = await response.json();
//     console.log("Response from Printers Action", responseData);
//     return responseData;
//   } catch (error) {
//     console.error("Failed to get Printers Action", error);
//     throw error;
//   }
// };
