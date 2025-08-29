import css from './Profile.module.css'

function Profile() {
    return ( 
        <div className={css.card}>
  <div className={css.description}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
    <p className={css.className}>Petra Marica</p>
    <p className={css.userName} >@pmarica</p>
    <p className={css.country}>Salvador, Brasil</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li className={css.statsItem}>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li className={css.statsItem}>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>

    );
}
export default Profile;