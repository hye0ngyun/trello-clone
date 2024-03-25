"use client";
import Board from "@/lib/components/Board";
import { ITodo, draggingBoardState, toDoState } from "@/lib/store/drag-drop";
import { Add, Close, SettingsBackupRestore } from "@mui/icons-material";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import {
  DragDropContext,
  DragStart,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function DragDrop() {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const [draggingBoard, setdraggingBoard] = useRecoilState(draggingBoardState);
  const onDragEnd = (info: DropResult): void => {
    if (!info.destination) return;
    const { draggableId, destination, source } = info;
    // 보드 욺기는 경우
    if (source.droppableId === "all") {
      const arr = Object.keys(toDo);
      arr.splice(source.index, 1);
      arr.splice(destination.index, 0, draggableId.replace("board-", ""));
      setToDo((prev) => {
        const temp: { [key: string]: ITodo[] } = {};
        for (let i = 0; i < arr.length; i++) {
          temp[arr[i]] = prev[arr[i]];
        }
        return temp;
      });
      return;
    }
    // 보드 내의 아이템 욺기는 경우
    if (destination.droppableId === source.droppableId) {
      // 같은 보드에서 이동이 됐다면
      setToDo((allBoards) => {
        const temp = [...allBoards[source.droppableId]];
        // 1. 드래그 시작한 값 삭제
        const sourceValue = temp.splice(source.index, 1)[0];
        // 2. 드래그 끝나는 위치에 시작한 값 추가
        temp.splice(destination?.index, 0, sourceValue);
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
        const sourceValue = sourceBoard.splice(source.index, 1)[0];
        // 2. 드래그 끝나는 위치에 시작한 값 추가
        destinationBoard.splice(destination?.index, 0, sourceValue);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  const onDragStart = (info: DragStart): void => {
    setdraggingBoard(info.source.droppableId);
  };

  useEffect(() => {
    try {
      const localTodos = localStorage.getItem("todos");

      if (
        localStorage.getItem("todos") !== null &&
        Object.prototype.toString.call(JSON.parse(localTodos as string)) ===
          "[object Object]"
      ) {
        setToDo(JSON.parse(localTodos as string));
      } else {
        setToDo({
          todo: [],
          doing: [],
          done: [],
        });
      }
    } catch (error) {
      const tempToDo = {
        todo: [],
        doing: [],
        done: [],
      };
      setToDo(tempToDo);
      localStorage.setItem("todos", JSON.stringify(tempToDo));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDo));
    return () => {};
  }, [toDo]);

  const onReset = () => {
    setToDo({
      todo: [],
      doing: [],
      done: [],
    });
  };

  return (
    <Stack
      sx={{ flexGrow: 1, minHeight: "100dvh" }}
      overflow={"scroll"}
      bgcolor={"#E1AFD1"}
      borderRadius={2}
    >
      <Button onClick={onReset}>
        <SettingsBackupRestore />
      </Button>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable
          direction="horizontal"
          droppableId="all"
          isDropDisabled={draggingBoard !== "all"}
        >
          {(magic) => (
            <Stack
              alignItems={"flex-start"}
              direction={"row"}
              gap={1}
              p={2}
              sx={{ flexGrow: 1 }}
              overflow={"scroll"}
              bgcolor={"#E1AFD1"}
              borderRadius={2}
              ref={magic.innerRef}
              {...magic.droppableProps}
            >
              {Object.keys(toDo).map((key, index) => (
                <Draggable
                  draggableId={`board-${key}`}
                  index={index}
                  key={`board-${key}`}
                >
                  {(magic) => (
                    <Board
                      draggableProvider={magic}
                      todos={toDo[key]}
                      droppableId={key}
                    />
                  )}
                </Draggable>
              ))}
              <MakeBoard />
              {magic.placeholder}
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
    </Stack>
  );
}

function MakeBoard() {
  const [toDo, setToDo] = useRecoilState(toDoState);

  const [name, setName] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const onChangeInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setName(e.currentTarget.value);
  };
  const onHandleAdd = () => {
    setName("");
    setIsAdd((prev) => !prev);
  };

  // 보드의 카드 추가
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!name) return;
    setToDo((prev) => {
      const temp = { ...prev };
      temp[name] = [];
      return temp;
    });
    setName("");
    onHandleAdd();
  };
  return (
    <Box
      borderRadius={2}
      bgcolor={"rgb(241, 242, 244, 0.7 )"}
      flexShrink={0}
      width={272}
    >
      {isAdd ? (
        <form onSubmit={onSubmit}>
          <Stack p={1} gap={1}>
            <TextField
              placeholder={`Enter a title for this card…`}
              value={name}
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
          fullWidth
        >
          <Add />
          <span>add a board</span>
        </Button>
      )}
    </Box>
  );
}
