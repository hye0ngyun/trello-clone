import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableCard {
  todo: string;
  index: number;
}
function DraggableCard({ todo, index }: IDraggableCard) {
  return (
    <Draggable draggableId={`${index}-${todo}`} index={index}>
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
  );
}

export default React.memo(DraggableCard);

const Card = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  padding: 10px;
  border-radius: 5px;
`;
