import React, { useState } from "react";
import { DraggableProvided, Droppable } from "react-beautiful-dnd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { ITodo, draggingBoardState, toDoState } from "../store/drag-drop";
import DraggableCard from "@/lib/components/draggableCard";

interface IDraggableCard {
  todos: ITodo[];
  droppableId: string;
  draggableProvider: DraggableProvided;
}
function Board({ todos, droppableId, draggableProvider }: IDraggableCard) {
  const draggingBoard = useRecoilValue(draggingBoardState);
  const setToDo = useSetRecoilState(toDoState);
  const [inputTodo, setInputTodo] = useState("");
  const [boardName, setBoardName] = useState(droppableId);
  const [isEditBoardName, setIsEditBoardName] = useState(false);

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputTodo(e.currentTarget.value);
  };
  // 보드의 카드 추가
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!inputTodo) return;
    setToDo((prev) => {
      const temp = { ...prev };
      const newTodo = { id: Date.now(), text: inputTodo };
      temp[droppableId] = [...temp[droppableId], newTodo];
      return temp;
    });
    setInputTodo("");
  };

  // 보드 이름 수정
  const onSubmitBoardName = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!boardName) return;
    setToDo((prev) => {
      const temp = { ...prev };

      temp[boardName] = [...temp[droppableId]];
      delete temp[droppableId];
      return temp;
    });
    setInputTodo("");
  };
  return (
    <Wrapper
      ref={draggableProvider.innerRef}
      {...draggableProvider.draggableProps}
    >
      <form onSubmit={onSubmitBoardName}>
        {isEditBoardName ? (
          <input
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            onBlur={() => {
              setIsEditBoardName(false);
            }}
            autoFocus
          />
        ) : (
          <h2
            {...draggableProvider.dragHandleProps}
            onClick={() => {
              setIsEditBoardName(true);
            }}
          >
            {boardName}
          </h2>
        )}
      </form>
      <form onSubmit={onSubmit}>
        <AddTodoInput
          placeholder={`input ${droppableId} and press enter!`}
          value={inputTodo}
          onChange={onChangeInput}
        />
      </form>
      <Droppable
        droppableId={droppableId}
        isDropDisabled={draggingBoard === "all"}
      >
        {(magic, snapshot) => (
          <BoardWrapper
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {todos.map((todo, index) => (
              <DraggableCard
                index={index}
                todo={todo}
                key={`${droppableId}-${index}-${todo.id}`}
                droppableId={droppableId}
              />
            ))}
            {magic.placeholder}
          </BoardWrapper>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default React.memo(Board);

interface IBoardWrapper {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}
const BoardWrapper = styled.ul<IBoardWrapper>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#D0BFFF"
      : props.draggingFromThisWith
      ? "#DFCCFB"
      : "#FFF8C9"};
  padding: 20px;
  border-radius: 5px;

  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.15s;
  /* ${(props) => props.isDraggingOver && css``} */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const AddTodoInput = styled.input`
  border: unset;
  border-radius: 5px;
  padding: 10px;
`;
