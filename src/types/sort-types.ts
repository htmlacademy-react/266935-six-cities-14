export type SortTypes = 'DefaultSort' | 'PriceLowSort' | 'PriceHighSort' | 'RatingSort';

export type SortTypesSettingItem = {
    [key in SortTypes]: string;
};
