import { useEffect, useState } from 'react';
import PaginationList from './PaginationList';
import './styles.css';

const Pagination = ({ pageNumbers, handleSetPage, currentPage }) => {
  return (
    <div className='pagination'>
      {pageNumbers.map((pageNumber) => (
        <PaginationList key={pageNumber} currentPage={currentPage} pageNumber={pageNumber} handleSetPage={handleSetPage} />
      ))}
    </div>
  );
};

export default Pagination;
