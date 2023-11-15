import React from "react";
import { DraggableProvided, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { draggingBoardState } from "../store/drag-drop";

interface IDraggableCard {
  todos: string[];
  droppableId: string;
  draggableProvider: DraggableProvided;
}
function Board({ todos, droppableId, draggableProvider }: IDraggableCard) {
  const draggingBoard = useRecoilValue(draggingBoardState);
  return (
    <Wrapper
      ref={draggableProvider.innerRef}
      {...draggableProvider.draggableProps}
    >
      <h2 {...draggableProvider.dragHandleProps}>{droppableId}</h2>
      <Droppable
        droppableId={droppableId}
        isDropDisabled={draggingBoard === "all"}
      >
        {(magic) => (
          <BoardWrapper ref={magic.innerRef} {...magic.droppableProps}>
            {todos.map((todo, index) => (
              <DraggableCard index={index} todo={todo} key={`${index}-${todo}`} />
            ))}
            {magic.placeholder}
          </BoardWrapper>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default React.memo(Board);

const BoardWrapper = styled.ul`
  background-color: ${(props) => props.theme.boardBgColor};
  padding: 20px;
  border-radius: 5px;

  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
