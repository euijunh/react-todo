import TodoContainer from "../components/Todo/TodoContainer";
import {BACKGROUND_IMAGE_LIST} from "../constants";

const Home = () => {
  const chosenImage = BACKGROUND_IMAGE_LIST[Math.floor(Math.random() * BACKGROUND_IMAGE_LIST.length)];
  document.body.style.backgroundImage = `url("${chosenImage}")`;
  return (
    <TodoContainer />
  )
}

export default Home