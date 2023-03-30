import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const SouthAmericaInfo = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const rowsPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/south-america/", {
          headers: {
            Authorization: "JWT " + localStorage.getItem("jwtToken"),
          },
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const displayData = data
    .slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage)
    .map((info, index) => {
      return (
        <tr key={index}>
          <td>{info.name}</td>
          <td>{info.indepyear}</td>
          <td>{info.headofstate}</td>
          <td>{info.capital}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(data.length / rowsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <React.Fragment>
      <h1 className="h1-info"> Info:</h1>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Independent year:</th>
            <th>Head of state:</th>
            <th>Capital:</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"previous_page"}
          nextLinkClassName={"next_page"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
          href={"#"}
        />
      </table>
    </React.Fragment>
  );
};

export default SouthAmericaInfo;
