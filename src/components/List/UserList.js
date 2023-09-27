import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log(props);
  return (
    <div className={styles.users}>
      <h1>List Of Users</h1>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
