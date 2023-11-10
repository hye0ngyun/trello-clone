import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface IDraggableCard {
  todos: string[];
  droppableId: string;
}
function Board({ todos, droppableId }: IDraggableCard) {
  return (
    <Wrapper>
      <h2>{droppableId}</h2>
      <Droppable droppableId={droppableId}>
        {(magic) => (
          <BoardWrapper ref={magic.innerRef} {...magic.droppableProps}>
            {todos.map((todo, index) => (
              <DraggableCard index={index} todo={todo} key={todo} />
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
