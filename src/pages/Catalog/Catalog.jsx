import React from "react";
import { ItemCard, Loader } from "../../components";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles/Cart.scss";
function Catalog() {
  const { prodact, loading } = useSelector((store) => store.prodact);
  const [pageNumber, setPageNumber] = React.useState(0);
  const prodactPerPage = useSelector((state) => state.prodact.perPage);
  const total = useSelector((state) => state.prodact.total);
  const pagesVisited = pageNumber * prodactPerPage;
  const pageCount = Math.ceil(total / prodactPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="blok_tittle">
        <h3>Каталог</h3>
      </div>
      {loading ? (
        <ItemCard
          showcase={prodact.prodacts.slice(
            pagesVisited,
            pagesVisited + prodactPerPage
          )}
        />
      ) : (
        <Loader />
      )}
      <ReactPaginate
        previousLabel={<FaArrowAltCircleLeft />}
        nextLabel={<FaArrowAltCircleRight />}
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={5}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default Catalog;
