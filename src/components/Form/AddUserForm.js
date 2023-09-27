import { useState } from "react";
import styles from "./AddUserForm.module.css";
import Button from "../UI/Button";

const AddUserForm = (props) => {
  const [input, setInput] = useState({ username: "", age: "" });

  const usernameChangeHandler = (event) => {
    setInput((prevState) => {
      return {
        ...prevState,
        username: event.target.value,
      };
    });
  };

  const ageChangeHandler = (event) => {
    setInput((prevState) => {
      return {
        ...prevState,
        age: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmit({ ...input });
  };

  return (
    <form className={styles.input} onSubmit={submitHandler}>
      <h1>Add New User</h1>
      <label>Username</label>
      <input value={input["username"]} onChange={usernameChangeHandler}></input>
      <label>Age</label>
      <input
        value={input["age"]}
        type="number"
        onChange={ageChangeHandler}
      ></input>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUserForm;
