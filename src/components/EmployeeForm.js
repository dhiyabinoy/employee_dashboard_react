import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '', designation: '', location: '', salary: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (no backend POST). Data: ' + JSON.stringify(formData));
  };

  return (
    <div className="col-md-8 mx-auto">
      <h2 className="mb-4 text-center">Employee Form</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" name="designation" className="form-control" value={formData.designation} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" name="salary" className="form-control" value={formData.salary} onChange={handleChange} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
