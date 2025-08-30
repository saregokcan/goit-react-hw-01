import css from "../FriendList/Friends.module.css";


function FriendListItem({ avatar, name, status }) {
  return (
    <li>
      <div className={css.card}>
        <img src={avatar} alt="Avatar" width="72" />
        <p className={css.name}>{name}</p>
        <p style={status != "Online" ? { color: "red" } : { color: "green" }}>
          {status}
        </p>
      </div>
    </li>
  );
}

export default FriendListItem;