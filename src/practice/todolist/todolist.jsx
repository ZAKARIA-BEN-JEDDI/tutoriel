import React, { useState, useRef, useEffect } from 'react';
export default function Todolist() {
  const [tache, setTache] = useState(() => {
    const savedTasks = localStorage.getItem('tache');
    return savedTasks ? JSON.parse(savedTasks) : [{id:0, TacheName: "Tache 1", Tachestatus: 1 }];
  });
  const [ID , setid] = useState(0);
  const [tachestate , settachestate] = useState(0)
  const tachvalue = useRef('');
  const complete = useRef('');
  const encours = useRef('');

  useEffect(() => {
    localStorage.setItem('tache', JSON.stringify(tache));
  }, [tache]);

  const AddTache = (e) => {
    e.preventDefault();
    const tacheinputname = tachvalue.current.value;
    if (tacheinputname.trim()) {
      if (complete.current.checked) {
        settachestate(0)
      }
      if (encours.current.checked) {
        settachestate(1)
      }
      if (!complete.current.checked && !encours.current.checked) {
        settachestate(0)
      }
      if (settachestate.length > 0 && settachestate.length > 0) {
        setid(_=>_+1)
        setTache(prevState => {
          return [
            ...prevState,
            {id:ID,TacheName: tacheinputname.toUpperCase(), Tachestatus: tachestate }
          ];
        });
      }
      tachvalue.current.value = '';
    }
  };

  const handelChangeCheckbox = (e, key) => {
    setTache(prevTache => {
      const newTache = [...prevTache];
      newTache[key] = {
        ...newTache[key],
        Tachestatus: newTache[key].Tachestatus === 0 ? 1 : 0
      };
      return newTache;
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="" style={{'width':'50%'}}>
        <h1 className='text-primary text-center'>To Do App</h1>
        <hr />
          <form action="">
            <div className="row text-center">
              <input type="text"  className='col-6' ref={tachvalue}/>
              <div className="col-4">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="a" id="flexCheckDefault" ref={complete}/>
                  <label class="form-check-label" for="flexCheckDefault">
                    Complete
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="a" id="flexCheckDefault" ref={encours}/>
                  <label class="form-check-label" for="flexCheckDefault">
                  En Cours
                  </label>
                </div>
              </div>
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
                    <tr
                      key={item.id}
                      style={{
                        textDecoration: item.Tachestatus === 1 ? 'line-through' : 'none'
                      }}
                      >
                      <td>{item.id}</td>
                      <td>{item.TacheName}</td>
                      <td>{item.Tachestatus === 1 ? "Complétée" : "En cours"}</td>
                      <td key={key}>
                        <input value={key} class="form-check-input" type="checkbox" id="flexCheckDefault" onChange={(e) => handelChangeCheckbox(e,key)}/>
                        <i key={item.id} class="fa-solid fa-delete-left ms-3 text-danger btn" onClick={()=>{
                          setTache(prevstate => prevstate.filter(task => task.id !== item.id))
                        }}></i>
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