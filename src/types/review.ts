export type Review = {
    id: string;
    user: User;
    rating: number;
    comment: string;
    date: string;
}

export type User = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

