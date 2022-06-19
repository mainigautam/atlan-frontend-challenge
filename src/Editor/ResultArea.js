import React from "react";
import { database } from "../MockDB/MockDB";
import categories from "../MockDB/categories.json";
import orders from "../MockDB/orders.json";
import "./ResultArea.css";
const ResultArea = ({ selected, run }) => {
  const dataRows = [orders, categories];
  return (
    <div className="result-area">
      {!run ? (
        <div className="runInfo">
          <i className="fa fa-play fa-3x"></i>
          &nbsp;Press Execute to fire Query
        </div>
      ) : (
        <>
          <div className="result-header">
            {database[selected%2===0?0:1].data.map((col_name, index) => {
              return (
                <div key={index} className="col_name">
                  {col_name.name}
                </div>
              );
            })}
          </div>
          {dataRows[selected%2===0?0:1].map((col_data, index) => {
            return (selected % 2 === 0 ?
              <div className="result-row" key={index}>
                <div className="col_name col_data">{col_data.orderID}</div>
                <div className="col_name col_data">{col_data.productID}</div>
                <div className="col_name col_data">{col_data.unitPrice}</div>
                <div className="col_name col_data">{col_data.quantity}</div>
                <div className="col_name col_data">{col_data.discount}</div>
              </div>
             : 
              <div className="result-row" key={index}>
                <div className="col_name col_data">{col_data.categoryID}</div>
                <div className="col_name col_data">{col_data.categoryName}</div>
                <div className="col_name col_data">{col_data.description}</div>
                <div className="col_name col_data">{col_data.picture}</div>              
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ResultArea;
