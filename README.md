# React Todo List

- **ToDo List**
  - [X] useState
  - [X] [useReducer](https://github.com/euijunh/react-todo/commit/494e7b13a6e310a3410dc232ab2db487c95093c8)
    - **useState와 비교**
    - 컴포넌트가(state의 구조가) 복잡해지면 컴포넌트의 state가 업데이트되는 다양한 경우를 한눈에 파악하기 어려워질 수 있는데 useReducer를 사용하면 업데이트 로직이 어떻게 동작 하는지와 이벤트 핸들러를 통해 무엇이 일어났는지 를 깔끔하게 분리할 수 있습니다.

    - reducer를 사용한 state 관리는 state를 직접 설정하는 것과 약간 다릅니다. state를 설정하여 React에게 “무엇을 할 지”를 지시하는 대신, 이벤트 핸들러에서 “action”을 전달하여 사용자의 의도를 더 명확하게 “사용자가 방금 한 일”을 지정합니다. (state 업데이트 로직은 다른 곳에 있습니다!)

    - [참고1](https://react-ko.dev/reference/react/useReducer), [참고2](https://react-ko.dev/learn/extracting-state-logic-into-a-reducer)



## Component Structure
<p align="center">
  <img src="https://github.com/euijunh/react-todo/assets/52102634/89b856bb-1566-4245-af95-968331eceb67">
</p>
