import { Cities } from '../../const';

type CitiesListProps = {
  selectedCity: string;
}

function CitiesList({selectedCity}: CitiesListProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <li className="locations__item" key={`${city}`}>
            <a
              className={`${selectedCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;

