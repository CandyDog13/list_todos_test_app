import { useEffect, useState } from "react";
import { getInformationTodos, getInformationUsers } from "./api/api";
import TodoList, { ICard } from "./components/TodoList/TodoList";
import { IUserData } from "./data/users";
import { ITodoData } from "./data/todos";
import "./App.css";

function App() {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ICard[] | []>([]);

  const handleCountTasks = (id: number, arrayTasks: ITodoData[]) => {
    return arrayTasks.filter((element) => element.userId == id).length;
  };

  const createCards = (usersData:IUserData[], totosData:ITodoData[]) => {
    const listCards: ICard[] = usersData.map((element) => {
      return {
        name: element.name,
        email: element.email,
        userId: element.id,
        countTasks: handleCountTasks(element.id, totosData),
      };
    });
    setData(listCards);
  };

  const fetchData = async () => {
    try {
      const responseTodos = await getInformationTodos();
      const responseUsers = await getInformationUsers();
      createCards(responseUsers, responseTodos);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unknown Error: api.get.data"
      );
      console.log(error);
    } finally {
      console.log("fetchDone");
    }
  };

  useEffect(() => {
    fetchData();
    // createCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="main_header_text">User To-Do Table</h1>
        <span className="description">
          User task table for effective planning.
        </span>
      </div>
      <TodoList list={data}></TodoList>
    </>
  );
}

export default App;
