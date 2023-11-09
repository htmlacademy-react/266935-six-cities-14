import { useState } from 'react';
import { SortTypesSetting } from '../../const';
import { SortTypes } from '../../types/sort-types';

type SortTypeProps= {
  sortTypeSetting: SortTypes;
  setSortType: (type: SortTypes) => void;
}

function SortType({sortTypeSetting, setSortType}: SortTypeProps): JSX.Element {

  const [sortListVisible, setSortListVisible] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {SortTypesSetting[sortTypeSetting]}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          onClick={() => setSortListVisible(!sortListVisible)}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`${sortListVisible ?
          'places__options places__options--custom places__options--opened' :
          'places__options places__options--custom'}`}
      >
        {Object.entries(SortTypesSetting).map(([objKey, value]) => (
          <li
            className={`${sortTypeSetting === objKey ? 'places__option places__option--active' : 'places__option' }`}
            tabIndex={0}
            key={objKey}
            onClick={() => {
              setSortType(objKey);
              setSortListVisible(!sortListVisible);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortType;

