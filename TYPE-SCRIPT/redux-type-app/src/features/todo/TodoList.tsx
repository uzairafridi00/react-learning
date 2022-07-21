import React, { FC, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTodos } from "../../app/store";
import { addTodo, removeTodo } from "./todoSlice";

export const TodoList: FC = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch(addTodo(newTodoRef.current.value));
      newTodoRef.current.value = "";
    }
  }, [dispatch]);

  return (
    <>
      <div>
        <UL
          items={todos}
          itemClick={(item) => alert(item.id)}
          render={(todo) => (
            <>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </button>
            </>
          )}
        />
        <div>
          <input type="text" ref={newTodoRef} />
          <Button onClick={onAddTodo}>Add Todo</Button>
        </div>
      </div>
    </>
  );
};

const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: "red",
      color: "white",
      fontSize: "xx-large",
    }}
  >
    {title ?? children}
  </button>
);

function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}
