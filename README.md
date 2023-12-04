# React Todo List

- **ToDo List**
  - [X] useState
  - [X] [useReducer](https://github.com/euijunh/react-todo/commit/494e7b13a6e310a3410dc232ab2db487c95093c8), [2](https://github.com/euijunh/react-todo/commit/5c7a2195cf4c2af813f6b440640cec77b3bd2481)
    - **useState와 비교**
    - 컴포넌트가(state의 구조가) 복잡해지면 컴포넌트의 state가 업데이트되는 다양한 경우를 한눈에 파악하기 어려워질 수 있는데 useReducer를 사용하면 업데이트 로직이 어떻게 동작 하는지와 이벤트 핸들러를 통해 무엇이 일어났는지 를 깔끔하게 분리할 수 있습니다.
    - reducer를 사용한 state 관리는 state를 직접 설정하는 것과 약간 다릅니다. state를 설정하여 React에게 “무엇을 할 지”를 지시하는 대신, 이벤트 핸들러에서 “action”을 전달하여 사용자의 의도를 더 명확하게 “사용자가 방금 한 일”을 지정합니다. (state 업데이트 로직은 다른 곳에 있습니다!)
    - [참고1](https://react-ko.dev/reference/react/useReducer), [참고2](https://react-ko.dev/learn/extracting-state-logic-into-a-reducer)
  - [X] [useImmerReducer](https://github.com/euijunh/react-todo/commit/2d3eb1eb4c86623d52434fa88f62e4d8b7a23214), [reducerMap(-switch에 비해 obj키값으로 접근이 빠름, 어떤매개변수를 사용하는지 한눈에 알수있음-)](https://github.com/euijunh/react-todo/commit/5ca4823ab11c1ca0089d479264b2176d86a92794)
    - Immer 라이브러리를 사용하면 객체를 변경하는 것처럼 간결한 코드를 작성할 수 있어 반복적인 코드를 줄일 수 있습니다.
    - use-immer 패키지는 추가로 useImmerReducer 함수를 제공하는데 이 함수를 사용하면 직접적인 변경을 통한 상태 변경이 가능합니다.
    - 일반 state의 객체와 배열을 변경할 때와 마찬가지로 Immer 라이브러리를 사용해 reducer를 더 간결하게 만들 수 있습니다. 여기서 useImmerReducer를 사용하면 push 또는 arr[i] = 할당으로 state를 변이할 수 있습니다:
    - [참고1](https://react-ko.dev/reference/react/useReducer#examples-basic), [참고2](https://react-ko.dev/learn/extracting-state-logic-into-a-reducer#writing-concise-reducers-with-immer), [참고3](https://github.com/immerjs/use-immer#useimmerreducer)



## Component Structure
<p align="center">
  <img src="https://github.com/euijunh/react-todo/assets/52102634/89b856bb-1566-4245-af95-968331eceb67">
</p>
