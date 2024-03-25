import React, { useState } from "react";
import { DraggableProvided, Droppable } from "react-beautiful-dnd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { ITodo, draggingBoardState, toDoState } from "../store/drag-drop";
import DraggableCard from "@/lib/components/draggableCard";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Add, Close } from "@mui/icons-material";

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

  const onChangeInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
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
    onHandleAdd();
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

  const [isAdd, setIsAdd] = useState(false);
  const onHandleAdd = () => {
    setInputTodo("");
    setIsAdd((prev) => !prev);
  };

  return (
    <Stack
      flexShrink={0}
      width={272}
      gap={1}
      p={1}
      borderRadius={2}
      bgcolor={"rgb(241, 242, 244)"}
      ref={draggableProvider.innerRef}
      {...draggableProvider.draggableProps}
    >
      {/* 제목 */}
      <form
        onSubmit={onSubmitBoardName}
        style={{
          height: 40,
          padding: 10,
        }}
      >
        {isEditBoardName ? (
          <TextField
            size="small"
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
      {/* 리스트 */}
      <Droppable
        droppableId={droppableId}
        isDropDisabled={draggingBoard === "all"}
      >
        {(magic, snapshot) => (
          <Stack
            gap={1}
            // isDraggingOver={snapshot.isDraggingOver}
            // draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
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
          </Stack>
        )}
      </Droppable>
      {/* 입력 */}

      {isAdd ? (
        <form onSubmit={onSubmit}>
          <Stack gap={1}>
            <TextField
              placeholder={`Enter a title for this card…`}
              value={inputTodo}
              onChange={onChangeInput}
              autoFocus
            />
            <Stack direction={"row"} gap={1} className="">
              <Button sx={{ flexGrow: 1 }} variant="contained" type="submit">
                add card
              </Button>
              <Button onClick={onHandleAdd}>
                <Close />
              </Button>
            </Stack>
          </Stack>
        </form>
      ) : (
        <Button
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          onClick={onHandleAdd}
        >
          <Add />
          <span>add a card</span>
        </Button>
      )}
    </Stack>
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
