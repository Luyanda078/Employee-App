import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ addOrUpdateEmployee, editEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    position: '',
    image: '',
    id: ''
  });

  useEffect(() => {
    if (editEmployee) {
      setEmployee(editEmployee);
    } else {
      setEmployee({
        name: '',
        surname: '',
        email: '',
        phone: '',
        position: '',
        image: '',
        id: ''
      });
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateEmployee(employee);
    setEmployee({
      name: '',
      surname: '',
      email: '',
      phone: '',
      position: '',
      image: '',
      id: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="surname"
            value={employee.surname}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <input
        type="email"
        className="form-control mb-3"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
      <input
        type="text"
        className="form-control mb-3"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <input
        type="text"
        className="form-control mb-3"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Employee Position"
        required
      />
      <input
        type="text"
        className="form-control mb-3"
        name="image"
        value={employee.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit" className="btn btn-primary w-100">
        {editEmployee ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  );
};

export default EmployeeForm;
