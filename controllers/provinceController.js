import Province from "../models/Province.js";
import csv from "csvtojson";

export const importProvince = async (req, res) => {
  try {
    let provineData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        response.forEach((item) => {
          for (let [key, value] of Object.entries(item)) {
            let titleArray = key.split(";");
            let rowData = value.split(";");
            let item = {};
            for (let i = 0; i < titleArray.length; i++) {
              //   console.log({ [titleArray[i]]: rowData[i] });
              item = { ...item, [titleArray[i]]: rowData[i] };
            }
            provineData.push(item);
          }
        });
        const inertedData = await Province.insertMany(provineData);
        console.log(inertedData);
        res.send({
          status: 200,
          success: true,
          msg: "File imported",
          provines: inertedData,
        });
      });
  } catch (error) {
    res.send({ status: 400, success: false, msg: error.message });
  }
};
