import React from "react";

const Form = props =>
  <form>
    <div className="form-group">
      <label>Topic:</label>
      <input type="text" className="form-control" name="topic" value={props.topic} id="topic" onChange={props.handleInputChange} />
    </div>
    <div className="form-group">
      <label>Start Year:</label>
      <input type="text" className="form-control" name="start" value={props.start} id="start" onChange={props.handleInputChange} />
    </div>
    <div className="form-group">
      <label>End Year: (not same as start year)</label>
      <input type="text" className="form-control" name="end" value={props.end} id="search" onChange={props.handleInputChange} />
    </div>
    <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>Search</button>
  </form>

export default Form;