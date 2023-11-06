"use client";
import { hourSeletor, minuteState, secondSeletor } from "@/lib/store/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

type TInputEvent = React.FormEvent<HTMLInputElement>;
export default function Home() {
  const [minute, setMinute] = useRecoilState(minuteState);
  const [hour, setHour] = useRecoilState(hourSeletor);
  const [second, setSecond] = useRecoilState(secondSeletor);
  const onMinuteChange = (event: TInputEvent) => {
    setMinute(+event.currentTarget.value);
  };
  const onHourChange = (event: TInputEvent) => {
    setHour(+event.currentTarget.value);
  };
  const onSecondChange = (event: TInputEvent) => {
    setSecond(+event.currentTarget.value);
  };
  return (
    <FormLayout>
      <Row>
        <label htmlFor="hour">hour: </label>
        <input
          type="text"
          id="hour"
          value={hour}
          onChange={onHourChange}
          onFocus={() => {
            setHour(0);
          }}
        />
      </Row>
      <Row>
        <label htmlFor="minute">minute: </label>
        <input
          type="text"
          id="minute"
          value={minute}
          onChange={onMinuteChange}
          onFocus={() => {
            setMinute(0);
          }}
        />
      </Row>
      <Row>
        <label htmlFor="second">second: </label>
        <input
          type="text"
          id="second"
          value={second}
          onChange={onSecondChange}
        />
      </Row>
    </FormLayout>
  );
}

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  label {
    flex-basis: 70px;
    flex-shrink: 0;
  }
  input {
    border: unset;
    border-bottom: 1px solid #fff;
    padding: 5px;
    transition: 0.15s;
    &:focus {
      outline: none;
      border-bottom: 1px solid black;
    }
  }
`;
