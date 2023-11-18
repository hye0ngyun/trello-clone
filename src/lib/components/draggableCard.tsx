import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, toDoState } from "../store/drag-drop";

interface IDraggableCard {
  todo: ITodo;
  index: number;
  droppableId: string;
}
function DraggableCard({ todo, index, droppableId }: IDraggableCard) {
  const setToDo = useSetRecoilState(toDoState);
  const onClickDelete = (targetId: number): void => {
    setToDo((prev) => {
      return {
        ...prev,
        [droppableId]: prev[droppableId].filter(
          (todo, index) => todo.id !== targetId
        ),
      };
    });
  };
  return (
    <Draggable draggableId={`${droppableId}-${index}-${todo.id}`} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <span>{todo.text}</span>
          <span className="delete-btn" onClick={() => onClickDelete(todo.id)}>
            x
          </span>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);

const Card = styled.li<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "#BEADFA" : props.theme.cardBgColor};
  padding: 10px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  .delete-btn {
    visibility: hidden;
    transition: 0.15s;
    color: white;
    cursor: pointer;
  }
  &:hover {
    .delete-btn {
      visibility: visible;
      color: black;
    }
  }
`;
