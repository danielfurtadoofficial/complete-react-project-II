import React, { useState } from "react";
import Card from "./components/UI/Card";
import AddUserForm from "./components/Form/AddUserForm";
import UserList from "./components/List/UserList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [userList, setUserList] = useState([]);
  const [invalidData, setInvalidData] = useState({
    state: false,
    message: "",
    title: "",
  });

  const addUserSubmitFormHandler = (user) => {
    if (!user.username || !user.age) {
      setInvalidData({
        state: true,
        message: "Please enter a valid name (no-empty values)",
        title: "Invalid Input",
      });
      return;
    }

    if (parseInt(user.age) < 0) {
      setInvalidData({
        state: true,
        message: "Please enter a age > 0",
        title: "Invalid Input",
      });

      console.log(user.age);
      return;
    }

    setUserList((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          username: user.username,
          age: user.age,
        },
      ];
    });
  };

  const closeErrorModalHandler = () => {
    setInvalidData({
      state: false,
      message: "",
      title: "",
    });
  };

  return (
    <div>
      <br />
      <Card>
        <AddUserForm onSubmit={addUserSubmitFormHandler} />
      </Card>
      <br />

      {!invalidData.state ? (
        <Card>
          <UserList users={userList} />
        </Card>
      ) : (
        <ErrorModal
          data={invalidData}
          onCloseErrorModal={closeErrorModalHandler}
        />
      )}
    </div>
  );
}

export default App;
