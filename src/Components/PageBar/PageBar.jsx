import "./PageBar.css";

const PageBar = (props) => {
  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li>
          <a
            className="button"
            onClick={props.PreviousPage}
            disabled={props.pageCurrent === 1}>
            Previous
          </a>
        </li>

        {props.pageCurrent !== 1 && <li>1</li>}
        {props.pageCurrent > 2 && <li>...</li>}
        <li className={props.pageCurrent === 1 ? "page-current" : ""}>
          {props.pageCurrent}
        </li>
        {props.pageCurrent < props.lastPage - 1 && <li>...</li>}
        {props.pageCurrent !== props.lastPage && <li>{props.lastPage}</li>}

        <li>
          <a
            className="button"
            onClick={props.NextPage}
            disabled={props.pageCurrent === props.lastPage}>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PageBar;
