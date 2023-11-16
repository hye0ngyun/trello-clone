import React from "react";
import { DraggableProvided, Droppable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";
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
                key={`${droppableId}-${index}-${todo}`}
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
