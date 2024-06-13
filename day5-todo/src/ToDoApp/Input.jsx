import React from "react";

export default function Input() {
  return (
    <div>
      <form className="row g-3">
        <div className="col-10">
          <input type="text" placeholder="Enter ToDo" />
        </div>

        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
