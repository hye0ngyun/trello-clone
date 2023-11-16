import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../store/drag-drop";

interface IDraggableCard {
  todo: string;
  index: number;
  droppableId: string;
}
function DraggableCard({ todo, index, droppableId }: IDraggableCard) {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const onClickDelete = (targetIndex: number) => {
    setToDo((prev) => {
      return {
        ...prev,
        [droppableId]: prev[droppableId].filter(
          (todo, index) => index !== targetIndex
        ),
      };
    });
  };
  return (
    <Draggable draggableId={`${droppableId}-${index}-${todo}`} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <span>{todo}</span>
          <span className="delete-btn" onClick={() => onClickDelete(index)}>
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
