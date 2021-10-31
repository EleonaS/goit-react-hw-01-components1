import s from './Friend.module.css';
import PropTypes from 'prop-types';

/*<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="" width="48" />
  <p class="name"></p>
</li>*/

function Friend({
  name,
  isOnline = false,
  avatar,
}) {
  return (
    <li className={s.item}>
      <span
        className={
          isOnline
            ? s.online
            : s.offline
        }
      ></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Friend;
