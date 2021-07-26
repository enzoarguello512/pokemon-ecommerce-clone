import React from "react"
import Button from './../../Atoms/Button/Button';

require('./SortBy.css')

function SortBy() {
  return (
    <div className="row justify-content-between">
      <div className="col-5">
        <Button btnClass="btn-cyan text-white w-100">
          <span className="d-block p-1 fw-bold">¡Sorpréndeme!</span>
        </Button>
      </div>
      <div className="col-5">
        <select className="form-select mt-1" name="sortOrder" id="sortOrder">
          <option value="noSort">Ordernar por...</option>
          <option value="numberAsc" defaultValue>Número inferior</option>
          <option value="numberDesc">Número superior</option>
          <option value="nameAsc">A-Z</option>
          <option value="nameDesc">Z-A</option>
        </select>
      </div>
    </div>
  )
}

export default SortBy
