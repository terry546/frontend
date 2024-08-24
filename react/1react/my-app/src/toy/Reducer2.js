import React,{ useReducer, useState } from "react";


function App() {
  const [newItem, setNewItem] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");


  React.useEffect=(()=>{
    console.log(editingId)
  },[])

  const reducerTodo = (state, action) => {
    switch (action.type) {
      case "adding":
        return {
          todos: [...state.todos, action.payload],
        };
      case "deleting":
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case "updating":
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
          ),
        };
      default:
        return state;
    }
  };

  const initialState = {
    todos: [],
  };

// dispatch기능
// dispatch반환된 함수를 사용하면 상태 useReducer를 다른 값으로 업데이트하고 다시 렌더링을 트리거할 수 있습니다. dispatch함수에 유일한 인수로 작업을 전달해야 합니다.

// 상태관리 useReducer

// 장부 reducerTodo
// 명사 물건의 출납이나 돈의 수입과 지출(수지)(收支) 계산을 적어 두는 책

// 창구 dispatchTodo
// 외부 사람과 직접 접촉하거나 단체나 기관 따위에서 서로 협조하기 위하여 마련하여 놓은 연락 부서를 비유적으로 이르는 말.

  const [state, dispatchTodo] = useReducer(reducerTodo, initialState);

  const addNewItem = () => {
    dispatchTodo({
      type: "adding",
      payload: {
        id: Date.now(),
        text: newItem,
      },
    });
    setNewItem("");
  };

  const removeItem = (id) => {
    dispatchTodo({
      type: "deleting",
      payload: id,
    });
  };

  const editItem = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id) => {
    dispatchTodo({
      type: "updating",
      payload: {
        id,
        text: editingText,
      },
    });
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="App">
      <p>useReducer로 할일 메모 만들어 보기</p>
      <input
        placeholder="여기에 할일을 입력"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button onClick={addNewItem}>할일 추가</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>저장</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => editItem(todo.id, todo.text)}>수정</button>
                <button onClick={() => removeItem(todo.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;