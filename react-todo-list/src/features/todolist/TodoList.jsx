import React from 'react';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
    padding: 15px;
    background-color: #efefef;
    color: #000000;
    height: 100vh
`;

const TodoListHeading = styled.h1`
    color: #ff0000;
    margin: 0px 0px 15px 0px;
    font-size: 20px
`;

const TodoInput = styled.input`
    padding: 5px 15px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #000000;
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

const AddButton = styled.button`
background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 10px;
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


// Listing Component
const ListingRenderer = ({ items, onDelete, onDone }) => {
    return <TodoListItems>
        {items && items.map((item, index) => {
            return <ListItem key={`item_${index}`}>
                {item.done ?
                    <del>{item.title}</del>
                    :
                    <span>{item.title}</span>
                }
                <span>
                    <DoneButton onClick={() => onDone && onDone(item.id)}>{item.done ? "☑" : "☐"}</DoneButton>
                    <DeleteButton onClick={() => onDelete && onDelete(item.id)}>&times;</DeleteButton>
                </span>
            </ListItem>
        })}
    </TodoListItems>
}

// Input Component
const ListInputRenderer = () => {
    return (<>
        <TodoInput />
        {/* <AddButton onClick={addItem()}>Add</AddButton> */}
    </>
)}

// Input Component
const HeadingRenderer = ({ title, count }) => {
    return <TodoListHeading>
        {title} <span>({count})</span>
    </TodoListHeading>
}

// Main Wrapper Component

const dummyItems = [{
    id: 1,
    title: "Item 1",
    done: true,
},
{
    id: 2,
    title: "Item 2",
    done: false,
}]

const TodoList = () => {
    return (
        <TodoListWrapper>
            <HeadingRenderer title="My Todo List" count="5" />
            <ListInputRenderer />
            <ListingRenderer items={dummyItems} />
        </TodoListWrapper>
    )
}

export default TodoList;