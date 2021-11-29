function FilterMatrix(props) {
  const { matrixData, onFilteredData } = props;
  const handlePositive = () => {
    onFilteredData(matrixData.map((number) => (number > 0 ? number : null)));
  };
  const handleNegative = () => {
    onFilteredData(matrixData.map((number) => (number < 0 ? number : null)));
  };

  return (
    <div className="background filters">
      <button onClick={handlePositive} className="green">
        Filter {">"} 0
      </button>
      <button onClick={() => onFilteredData(matrixData)} className="gray">
        All
      </button>
      <button onClick={handleNegative} className="red">
        Filter {"<"} 0
      </button>
    </div>
  );
}

export default FilterMatrix;
