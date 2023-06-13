import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,deleteItem,toggleDone } from '../../app/todoReducer';

import styled from 'styled-components';

const TodoListWrapper = styled.div`
  padding: 15px;
  background-color: #efefef;
  color: #000000;
  height: 100vh;
`;

const TodoListHeading = styled.h1`
  color: #ff0000;
  margin: 0px 0px 15px 0px;
  font-size: 20px;
`;

const TodoInput = styled.input`
  padding: 5px 15px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #eee;
  width: 100%;
  margin-bottom: 20px;
`;

const TodoListItems = styled.div`
  background-color: #ffffff;
  padding: 5px 15px;
`;

const ListItem = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const DoneButton = styled.button`
  background-color: #00ff00;
  color: #000000;
  border: none;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  cursor: pointer;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

// Listing Component
const ListingRenderer = () => {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const handleToggleDone = (itemId) => {
    dispatch(toggleDone(itemId));
  };

  return (
    <TodoListItems>
      {items &&
        items.map((item, index) => (
          <ListItem key={`item_${index}`}>
            {item.done ? <del>{item.title}</del> : <span>{item.title}</span>}
            <span>
              <DoneButton onClick={() => handleToggleDone(item.id)}>
                {item.done ? '☑' : '☐'}
              </DoneButton>
              <DeleteButton onClick={() => handleDeleteItem(item.id)}>
                &times;
              </DeleteButton>
            </span>
          </ListItem>
        ))}
    </TodoListItems>
  );
};

const TodoList = () => {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = React.useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemObject = {
        id: Date.now(),
        title: newItem,
        done: false,
      };

      dispatch(addItem(newItemObject));
      setNewItem('');
    }
  };

  return (
    <TodoListWrapper>
      <TodoListHeading>My Todo List ({items.length})</TodoListHeading>
      <TodoInput
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <AddButton onClick={handleAddItem}>Add</AddButton>
      <ListingRenderer />
    </TodoListWrapper>
  );
};

export default TodoList;
