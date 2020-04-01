import React from "react";

const Paginator = props => {
  let pages = props.pages;
  const switchPage = type => {
    debugger;
    switch (type) {
      case "prev":
        let prevPage = pages[props.currentPage - 2];
        if (prevPage) {
          props.setCurrentPage(prevPage);
        }
        break;
      case "next":
        let nextPage = pages[props.currentPage];
        if (nextPage) {
          props.setCurrentPage(nextPage);
        }
        break;
      default:
        props.setCurrentPage(props.currentPage);
    }
  };
  return (
    <div>
      <button onClick={() => props.setCurrentPage(pages[0])}>FIRST</button>
      <button onClick={() => switchPage("prev")}>{"<"}</button>
      <span>{props.currentPage}</span>
      <button onClick={() => switchPage("next")}>{">"}</button>
      <button onClick={() => props.setCurrentPage(pages[pages.length - 1])}>
        LAST
      </button>
    </div>
  );
};

export default Paginator;
