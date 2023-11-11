import { useState, useRef, useEffect } from 'react';
import { SortTypesSetting } from '../../const';
import { SortTypes } from '../../types/sort-types';

type SortTypeProps= {
  sortTypeSetting: SortTypes;
  setSortType: (type: SortTypes) => void;
}

function SortType({sortTypeSetting, setSortType}: SortTypeProps): JSX.Element {

  const [sortListVisible, setSortListVisible] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if(!sortListVisible) {
      return;
    }
    const openArea = document.querySelector('.places__sorting-type');
    const handleClick = (evt: MouseEvent) => {
      if(!listRef.current?.contains(evt.target as Node) && evt.target !== openArea){
        setSortListVisible(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [sortListVisible]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortListVisible(!sortListVisible)}
      >
        {SortTypesSetting[sortTypeSetting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        ref={listRef}
        className={`${sortListVisible ?
          'places__options places__options--custom places__options--opened' :
          'places__options places__options--custom'}`}
      >
        {(Object.keys(SortTypesSetting) as SortTypes[]).map((objKey) => (
          <li
            className={`${sortTypeSetting === objKey ? 'places__option places__option--active' : 'places__option' }`}
            tabIndex={0}
            key={objKey}
            onClick={() => {
              setSortType(objKey);
              setSortListVisible(!sortListVisible);
            }}
          >
            {SortTypesSetting[objKey]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortType;

