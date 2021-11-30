import React, { useState } from "react";
import generateMatrix from "./utils/generateMatrix";
import generateUniqueID from "./utils/generateID";
import "./matrix.css";
import getColor from "./utils/getColor";
import FilterMatrix from "./FilterMatrix";

function Matrix() {
  const [matrixData, setMatrixData] = useState(generateMatrix());
  const [filteredData, setFilteredData] = useState(matrixData);

  const hendleUpdateTable = () => {
    const newMatrix = generateMatrix();
    setMatrixData(newMatrix);
    setFilteredData(newMatrix);
  };

  const renderRow = (row) => {
    return row.map((number) => {
      if (number === null) {
        return (
          <td
            style={{ backgroundColor: "black" }}
            key={generateUniqueID()}
            className="td"
          ></td>
        );
      }
      return (
        <td
          style={{
            backgroundColor: `${getColor(
              number,
              Math.max(...matrixData),
              Math.min(...matrixData)
            )}`
          }}
          key={generateUniqueID()}
          className="td"
        >
          {number}
        </td>
      );
    });
  };

  const renderTable = (matrix) => {
    const table = [];

    for (let i = 0; i < 169; i += 13) {
      const row = matrix.slice(i, i + 13);
      table.push(row);
    }

    return table.map((row) => (
      <tr key={generateUniqueID()} className="row">
        {renderRow(row)}
      </tr>
    ));
  };

  return (
    <>
      <div onClick={hendleUpdateTable} className="background header">
        <b>Draw table</b>
      </div>
      <table className="table">
        <tbody>{renderTable(filteredData)}</tbody>
      </table>
      <FilterMatrix matrixData={matrixData} onFilteredData={setFilteredData} />
    </>
  );
}

export default Matrix;
