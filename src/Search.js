import React from "react";

export default function Search() {
  return (
    <div>
      <form className="search-form pb-2">
        <div className="row">
          <div className="col-8">
            <input
              autofocus="on"
              id="search-input"
              type="search"
              className="form-control"
              placeholder="enter a city.."
            />
          </div>
          <div className="col-4">
            <button type="submit" class="btn w-100 button-submit btn-success">
              search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}