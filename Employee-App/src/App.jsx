import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Registration from "./components/registration"
import Profile from "./components/profile";
import List from "./components/list";


import './App.css'

function App() {

  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  useEffect(() => {
    
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

 

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };


  const handleDeleteEmployee = (id) => {
   setEmployees(employees.filter((employee) => employee.id !== id));
   };

  

  
  const handleUpdateEmployee = (id, updatedEmployee) => {
   
    handleDeleteEmployee(id)
    handleAddEmployee(id)
  };
  
  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const filteredEmployees = employees.filter((employee) =>
    employee.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <>
    <div>
      <Navbar/>
      </div>
    <div className='main'>
      <Registration onAddEmployee={handleAddEmployee} />
     
      <List 
       employees={filteredEmployees}
       onSelectEmployee={handleSelectEmployee}
       onSearch={handleSearch}
     />
     
     {selectedEmployee && (
      <Profile employees={selectedEmployee} onUpdateEmployee={handleUpdateEmployee} onDeleteEmployee={handleDeleteEmployee} onAddEmployee={handleAddEmployee} />
    )}
     
      </div>  
    </>
  )
}

export default App
