"use client";
import Board from "@/lib/components/Board";
import { toDoState } from "@/lib/store/drag-drop";
import {
  DragDropContext,
  DropResult
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function DragDrop() {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    if (!info.destination) return;
    const { draggableId, destination, source } = info;

    if (destination.droppableId === source.droppableId) {
      // 같은 보드에서 이동이 됐다면
      setToDo((allBoards) => {
        const temp = [...allBoards[source.droppableId]];
        // 1. 드래그 시작한 값 삭제
        temp.splice(source.index, 1);
        // 2. 드래그 끝나는 위치에 시작한 값 추가
        temp.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: temp,
        };
      });
    } else {
      // 다른 보드로 이동이 됐다면
      setToDo((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        // 1. 드래그 시작한 값 삭제
        sourceBoard.splice(source.index, 1);
        // 2. 드래그 끝나는 위치에 시작한 값 추가
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          {Object.keys(toDo).map((key) => (
            <Board todos={toDo[key]} droppableId={key} key={key} />
          ))}
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
const Boards = styled.div`
  display: flex;
  gap: 10px;
`;
