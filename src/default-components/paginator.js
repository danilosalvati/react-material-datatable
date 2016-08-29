import React from 'react';
import ArrowButton from './arrow-button';
import paginatorStyle from '../styles/paginator-style';

export default function Paginator({page, rowsPerPage, totalRows, onChangePageFunction, onChangePagePerRowsFunction}) {

  let pagesArray = [1];
  for (let i = 2; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pagesArray.push(i);
  }

  return (<div style={paginatorStyle.paginator}>
      <div style={paginatorStyle.paginatorContent}>
        <label style={{verticalAlign:'middle'}}>
          Page:
        </label>
        <select style={paginatorStyle.selectStyle}
                onChange={(event) => onChangePageFunction(parseInt(event.target.value))}>
          {pagesArray.map(pageNumber => {
            return (<option key={pageNumber} value={pageNumber}>{pageNumber}</option>);
          })}
        </select>

        <label style={{verticalAlign:'middle'}}>
          Rows per page:
        </label>
        <select style={paginatorStyle.selectStyle}
                onChange={(event) => onChangePagePerRowsFunction(parseInt(event.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <label style={{verticalAlign:'middle'}}>{rowsPerPage * (page - 1) + 1}-
          {Math.min(rowsPerPage * page, totalRows)} of {totalRows}</label>
        <ArrowButton isEnabled={page > 1}
                     arrowType="previous_arrow"
                     onClickFunction={() => onChangePageFunction(page - 1)}/>
        <ArrowButton isEnabled={page < Math.ceil(totalRows / rowsPerPage)}
                     arrowType="next_arrow"
                     onClickFunction={() => onChangePageFunction(page + 1)}/>
      </div>
    </div>
  );
}

Paginator.propTypes = {
  page: React.PropTypes.number.isRequired,
  rowsPerPage: React.PropTypes.number.isRequired,
  totalRows: React.PropTypes.number.isRequired,
  onChangePageFunction: React.PropTypes.func.isRequired,
  onChangePagePerRowsFunction: React.PropTypes.func.isRequired
};
