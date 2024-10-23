import React, { useState, useRef, useEffect } from 'react';

export default function Todolist() {
  const [tache, setTache] = useState(() => {
    const savedTasks = localStorage.getItem('tache');
    return savedTasks ? JSON.parse(savedTasks) : [{ TacheName: "Tache 1", Tachestatus: 1 }];
  });

  const tachvalue = useRef('');

  useEffect(() => {
    localStorage.setItem('tache', JSON.stringify(tache));
  }, [tache]);

  const AddTache = (e) => {
    e.preventDefault();
    const tacheinputname = tachvalue.current.value;
    if (tacheinputname.trim()) {
      setTache(prevState => {
        return [
          ...prevState,
          { TacheName: tacheinputname, Tachestatus: 0 }
        ];
      });
      tachvalue.current.value = '';
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="" style={{'width':'50%'}}>
        <h1 className='text-primary text-center'>To Do App</h1>
        <hr />
          <form action="">
            <div className="row text-center">
              <input type="text"  className='col-6' ref={tachvalue}/>
              <select className='form-select col-4'>
                <option selected value="">Select Etat</option> 
                <option value="0">En Cours</option>
                <option value="1">Complétée</option>
              </select>
              <div className="col-2">
                <button className='btn btn-success' onClick={AddTache}>Add</button>
              </div>
            </div>
          </form>
          <table className='table table-striped text-center'>
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
                {
                  tache.map((item, key) => (
                    <tr key={key}>
                      <td>{key+1}</td>
                      <td>{item.TacheName}</td>
                      <td>{item.Tachestatus === 1 ? "Complétée" : "En cours"}</td>
                      <td>
                        <button className="btn rounded-pill btn-outline-warning me-2 btn-sm">Edit</button>
                        <button className="btn rounded-pill btn-outline-danger ms-2 btn-sm">Delete</button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
      </div>
    </div>
  )
}