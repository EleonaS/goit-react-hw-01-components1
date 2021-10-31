import s from './Profile.module.css';
import PropTypes from 'prop-types';
/*<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
*/

const Profile = function ({
  avatar = 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  name,
  tag,
  location,
  stats,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt={name}
          className={s.avatar}
        />
        <p className={s.tag}>{tag}</p>
        <p className={s.name}>{name}</p>
        <p className={s.location}>
          {location}
        </p>
      </div>
      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>
            Followers
          </span>
          <span className={s.quantity}>
            {stats.followers}
          </span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>
            Views
          </span>
          <span className={s.quantity}>
            {stats.views}
          </span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>
            Likes
          </span>
          <span className={s.quantity}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
