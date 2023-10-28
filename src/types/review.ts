import { Host } from './offer';

export type Review = {
    id: number;
    user: Host;
    rating: number;
    comment: string;
    date: string;
}

