import { useState } from 'react';
function RegisterEmployee(){
  const [inputs, setInputs] = useState({addbook});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
   
    
  }



  return (
    <>
        <form onSubmit={handleSubmit}>

<h1>Employee Application</h1>

      <label>
        <input placeholder ="Enter ISBN"
         type="number"
         name="isbn"
         value={inputs.isbn || ""}
         onChange={handleChange}/>
     </label>
      <br></br>
      <br></br>

      <label>
        <input   placeholder= "Enter The Book Title" type="text" 
         name="title"
         value={inputs.title || ""}
         onChange={handleChange}/>
      </label>
      <br></br>
      <br></br>

      <label>
        <input type="number" placeholder='Enter the number of pages'
         name="NumPages"
         value={inputs.NumPages || ""}
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>
        <input type="text" placeholder="Enter the number of pages"
         name="edition"
         value={inputs.edition || ""}
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>
        <input type="text" placeholder ="Enter publishers name"
         name="username"
        value={inputs.username || ""}
        onChange={handleChange}/>
      </label>
      <br></br>
      <br></br>

      <label>
        <input type="text" placeholder ="Enter editor name"
        name="editorName"
        value={inputs.editorName || ""}
        onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>
        <input type="price" placeholder ="Enter the price"
         name="price"
         value={inputs.price || ""}
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

<label>
        <input type="date" placeholder = "Enter the release date"
         name="Rdate"
         value={inputs.Rdate || ""}
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>
      {/* <select>
  <option value="PDF">PDF</option>
  <option value="e-BOOK" selected>e-BOOK</option>
  <option value="HARD-COPY">HARD-COPY</option>
</select> */}

      <div>
        <button type="submit">OK</button>
        </div>

    </form>

 </>
  )
}
    export default RegisterEmployee