export default function DragDrop() {
  return <></>;
}
// "use client";
// import Board from "@/lib/components/Board";
// import Modal from "@/lib/components/Modal";
// import { draggingBoardState, toDoState } from "@/lib/store/drag-drop";
// import {
//   DragDropContext,
//   DragStart,
//   Draggable,
//   DropResult,
//   Droppable,
// } from "react-beautiful-dnd";
// import { useRecoilState } from "recoil";
// import styled from "styled-components";

// export default function DragDrop() {
//   const [toDo, setToDo] = useRecoilState(toDoState);
//   const [draggingBoard, setdraggingBoard] = useRecoilState(draggingBoardState);
//   const onDragEnd = (info: DropResult): void => {
//     if (!info.destination) return;
//     const { draggableId, destination, source } = info;
//     // 보드 욺기는 경우
//     if (source.droppableId === "all") {
//       const arr = Object.keys(toDo);
//       arr.splice(source.index, 1);
//       arr.splice(destination.index, 0, draggableId.replace("board-", ""));
//       setToDo((prev) => {
//         const temp: { [key: string]: string[] } = {};
//         for (let i = 0; i < arr.length; i++) {
//           temp[arr[i]] = prev[arr[i]];
//         }
//         return temp;
//       });
//       return;
//     }
//     // 보드 내의 아이템 욺기는 경우
//     if (destination.droppableId === source.droppableId) {
//       // 같은 보드에서 이동이 됐다면
//       setToDo((allBoards) => {
//         const temp = [...allBoards[source.droppableId]];
//         // 1. 드래그 시작한 값 삭제
//         temp.splice(source.index, 1);
//         // 2. 드래그 끝나는 위치에 시작한 값 추가
//         temp.splice(destination?.index, 0, draggableId);
//         return {
//           ...allBoards,
//           [source.droppableId]: temp,
//         };
//       });
//     } else {
//       // 다른 보드로 이동이 됐다면
//       setToDo((allBoards) => {
//         const sourceBoard = [...allBoards[source.droppableId]];
//         const destinationBoard = [...allBoards[destination.droppableId]];
//         // 1. 드래그 시작한 값 삭제
//         sourceBoard.splice(source.index, 1);
//         // 2. 드래그 끝나는 위치에 시작한 값 추가
//         destinationBoard.splice(destination?.index, 0, draggableId);
//         return {
//           ...allBoards,
//           [source.droppableId]: sourceBoard,
//           [destination.droppableId]: destinationBoard,
//         };
//       });
//     }
//   };
//   const onDragStart = (info: DragStart): void => {
//     setdraggingBoard(info.source.droppableId);
//   };
//   return (
//     <Wrapper>
//       <Modal>
//         <Modal.Title>title</Modal.Title>
//         <Modal.Content>content</Modal.Content>
//       </Modal>
//       <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
//         <Droppable
//           direction="horizontal"
//           droppableId="all"
//           isDropDisabled={draggingBoard !== "all"}
//         >
//           {(magic) => (
//             <Boards ref={magic.innerRef} {...magic.droppableProps}>
//               {Object.keys(toDo).map((key, index) => (
//                 <Draggable
//                   draggableId={`board-${key}`}
//                   index={index}
//                   key={`board-${key}`}
//                 >
//                   {(magic) => (
//                     <Board
//                       draggableProvider={magic}
//                       todos={toDo[key]}
//                       droppableId={key}
//                     />
//                   )}
//                 </Draggable>
//               ))}
//               {magic.placeholder}
//             </Boards>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   min-height: 100vh;
// `;
// const Boards = styled.div`
//   display: flex;
//   gap: 10px;
// `;
