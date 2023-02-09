import React, { useState } from "react";
import style from './MainLayout.module.css';

const MainLayout = () => {

  const [data, setData] = useState([
    {
      label: 'TODO 1',
      id: 1,
      status: 'todo'
    },
  ]);

  const filteredData = (status) => {
    return data.filter(el => el.status === status);
  };

  const STATUS = ['todo','in_progress','in_qa','done'];
  const STATUS_LABEL = ['TODO','IN PROGRESS','IN QA', 'DONE'];

  const handleAddTodo = () => {
    const newTodoId = data[data.length-1].id || 0;
    const newData = {
      label: `TODO ${newTodoId + 1}`,
      id: newTodoId + 1,
      status: 'todo'
    };
    setData([...data, newData]);
  };

  return(
    <div className={style.container}>
      <h4>Todo App</h4>
      <p>This is Our TODO</p>
      <button className={style.btnTodo} onClick={()=> handleAddTodo()}>+</button>
      <div className={style.todoWrapper}>
        {STATUS.map((data, index)=>(
          <div className={style.todoItemWrapper} key={index}>
            <h3>{STATUS_LABEL[index]}</h3>
            {filteredData(data).map((item)=>(
              <div className={style.todoItem} key={item.id}>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainLayout;
