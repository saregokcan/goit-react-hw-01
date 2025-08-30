import css from "./Friends.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";


function FriendList(props) {
  return (
    <ul className={css.friendsArea}>
      {props.friends.map((friendItem) => (
        <FriendListItem
          key={friendItem.id}
          name={friendItem.name}
          avatar={friendItem.avatar}
          status={friendItem.isOnline ? "Online" : "Offline"}
        />
      ))}
    </ul>
  );
}

export default FriendList;