import React from 'react';
import ArrowButton from './arrow-button';
import paginatorStyle from '../styles/paginator-style';

export default function Paginator({page, rowsPerPage, totalRows}) {

  let pagesArray = [1];
  for (let i = 2; i <= totalRows / rowsPerPage; i++) {
    pagesArray.push(i);
  }

  return (<div style={paginatorStyle.paginator}>
    <div style={paginatorStyle.paginatorContent}>
      Page:
      <select style={paginatorStyle.selectStyle}>
        {pagesArray.map(pageNumber => {
          return (<option key={pageNumber} value={pageNumber}>{pageNumber}</option>);
        })}
      </select>
      Rows per page:
      <select style={paginatorStyle.selectStyle}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      1-10 of 100
      <ArrowButton isEnabled={false} arrowType="previous_arrow"/>
      <ArrowButton isEnabled={true} arrowType="next_arrow"/>
    </div>
  </div>);
}

Paginator.propTypes = {
  page: React.PropTypes.number.isRequired,
  rowsPerPage: React.PropTypes.number.isRequired,
  totalRows: React.PropTypes.number.isRequired,
};
