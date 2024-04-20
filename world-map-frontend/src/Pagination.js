import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, changePage, ...props }) => {
  return (
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
      {...props}
    />
  );
};

export default Pagination;
