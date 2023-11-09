import { Link } from 'react-router-dom';
import { AppRoute, Cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {changeCity} from '../../store/action.ts';

function CitiesList(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container" >
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <li className="locations__item" key={`${city}`}>
            <Link to={AppRoute.Root}
              className={`${selectedCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`}
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity({city}));
              }}
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

