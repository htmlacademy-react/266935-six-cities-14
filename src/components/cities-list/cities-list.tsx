import { Link } from 'react-router-dom';
import { AppRoute, Cities } from '../../const';

type CitiesListProps = {
  selectedCity: string;
}

function CitiesList({selectedCity}: CitiesListProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <li className="locations__item" key={`${city}`}>
            <Link to={AppRoute.Root}
              className={`${selectedCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;

