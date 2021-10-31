import s from './Statistics.module.css';
import PropTypes from 'prop-types';

//<Statistics title="Upload stats" stats={statisticalData} />;
//<Statistics stats={statisticalData} />;

function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && (
        <h2 className={s.title}>
          {title}
        </h2>
      )}

      <ul className={s.list}>
        {stats.map(
          ({
            id,
            label,
            percentage,
          }) => (
            <li
              className={s.listItem}
              key={id}
              style={{
                backgroundColor:
                  getRandomColor(),
              }}
            >
              <span className={s.label}>
                {label}
              </span>
              <span
                className={s.percentage}
              >
                {percentage}%
              </span>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

//const red = Math.floor(Math.random() * 255);
//const green = Math.floor(Math.random() * 255);
//const blue = Math.floor(Math.random() * 255);

function getRandomColor() {
  return `rgb(${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(
    Math.random() * 255,
  )})`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label:
        PropTypes.string.isRequired,
      percentage:
        PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
