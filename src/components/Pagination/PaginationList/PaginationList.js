import './styles.css';

const PaginationList = ({ pageNumber, handleSetPage, currentPage }) => {
  return (
    <div
      //toggle different className based on condition
      className={
        pageNumber === currentPage ? 'paginationList_active' : 'paginationList'
      }
      onClick={() => {
        handleSetPage(pageNumber);
      }}
    >
      {pageNumber}
    </div>
  );
};

export default PaginationList;
