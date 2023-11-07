"use client";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const toDos = ["a", "b", "c", "d", "e", "f"];
export default function DragDrop() {
  const onDragEnd = () => {};
  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          <Droppable droppableId="first">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((todo, index) => (
                  <Draggable draggableId={todo} index={index} key={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {todo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </DragDropContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;
const Boards = styled.div``;
const Board = styled.ul`
  background-color: ${(props) => props.theme.boardBgColor};
  padding: 20px;
  border-radius: 5px;

  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Card = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  padding: 10px;
  border-radius: 5px;
`;
