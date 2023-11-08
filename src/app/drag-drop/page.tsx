"use client";
import { toDoState } from "@/lib/store/drag-drop";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function DragDrop() {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDo((oldToDo) => {
      const temp = [...oldToDo];
      // 1. 드래그 시작한 값 삭제
      temp.splice(source.index, 1);
      // 2. 드래그 끝나는 위치에 시작한 값 추가
      temp.splice(destination?.index, 0, draggableId);
      return temp;
    });
  };
  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          <Droppable droppableId="first">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDo.map((todo, index) => (
                  <Draggable draggableId={todo} index={index} key={todo}>
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
