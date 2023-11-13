import React, {useState} from 'react';
import styled from "styled-components";

const Counter = () => {
    type CounterNumProps = {
        error: boolean
    }
    type ButtonProps = {
        maxNum?: boolean
    }


    const CounterType = styled.div`
      display: inline-block;
      width: 400px;
      height: 400px;
      border: 2px solid #46a4a4;
      background-color: #1f2134;
      border-radius: 10px;
    `
    const CounterTab = styled.div`
      width: 350px;
      height: 180px;
      margin: 20px auto;
      background-color: #46a4a4;
      color: #1f2134;
      border-radius: 10px;


    `
    const CounterNum = styled.h2<CounterNumProps>`
      font-size: 70px;
      margin: 40px auto;
      padding: 40px 150px;
      color: ${props => props.error ? 'red' : '#1f2134'};
    `
    const CounterBtn = styled.div`
      display: flex;
      width: 350px;
      height: 120px;
      border: 2px solid #46a4a4;
      border-radius: 10px;
      background-color: #1f2134;
      margin: 20px auto;

    `
    const Button = styled.button<ButtonProps>`
      min-width: 120px;
      height: 60px;
      color: #1f2134;
      margin: 20px auto;
      background-color: ${props => props.maxNum ? '#3c4d4d' : '#46a4a4'};
      border-radius: 5px;
      font-size: 40px;
    `


    let [num, setNum] = useState(0)
    const incHandler = () => {
        if (num < 5) {
            let count = num + 1;
            setNum(count)
        }
    }

    const resHandler = () => {
        setNum(0)

    }

    return (
        <CounterType>
            <CounterTab>
                <CounterNum error={num >= 5}>{num}</CounterNum>
            </CounterTab>
            <CounterBtn>
                <Button disabled={num >= 5} maxNum={num >= 5} onClick={incHandler}>inc</Button>
                <Button disabled={num <= 0} maxNum={num < 1} onClick={resHandler}> reset </Button>
            </CounterBtn>

        </CounterType>
    );
};

export default Counter;

/*
const CounterType = styled.div`
  display: inline-block;
  width: 400px;
  height: 400px;
  border: 2px solid #46a4a4;
  background-color: #1f2134;
  border-radius: 10px;
`
const CounterTab = styled.div`
  width: 350px;
  height: 180px;
  margin: 20px auto;
  background-color: #46a4a4;
  color: #1f2134;
  border-radius: 10px;


`
const CounterBtn = styled.div`
  display: flex;
  width: 350px;
  height: 120px;
  border: 2px solid #46a4a4;
  border-radius: 10px;
  background-color: #1f2134;
  margin: 20px auto;

`
const Button = styled.button`
  min-width: 120px;
  height: 60px;
  color: #1f2134;
  margin: 20px auto;
  background-color: #46a4a4;
  border-radius: 5px;
  font-size: 40px;
`*/
