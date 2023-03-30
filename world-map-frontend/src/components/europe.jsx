import React, { useState } from "react";
import useGetDataApi from "../services/getDataFromApi";
import TableInfo from "./common/infoTable";
import TableRow from "./common/infoTableRow";
import Pagination from "../Pagination";

const EuropeInfo = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const rowsPerPage = 7;

  useGetDataApi({ continent: "europe", setData });
  const displayData = data
    .slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage)
    .map((info, index) => {
      return <TableRow key={index} info={info} />;
    });

  const pageCount = Math.ceil(data.length / rowsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <React.Fragment>
      <div className="info">
        <h1 className="h1-info"> Info:</h1>
        <TableInfo displayData={displayData} />
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
    </React.Fragment>
  );
};

export default EuropeInfo;
