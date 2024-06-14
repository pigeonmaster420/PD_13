// src/components/WorkTable.js
import React from 'react';
import '../App.css';

function WorkTable({ title, headers, rows, isAttachButton }) {
  return (
    <div className="work-table">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="table-row" onClick={() => row[3](row[2])}>
              {row.slice(0, 3).map((cell, cellIndex) => (
                <td key={cellIndex} className={cellIndex === 2 && !isAttachButton ? `status-cell ${cell.replace(' ', '-')}` : ''}>
                  {isAttachButton && cellIndex === 2 ? (
                    <button className="button attach" onClick={(event) => {
                      event.stopPropagation();
                      row[3]();
                    }}>{cell}</button>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkTable;
