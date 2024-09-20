import { Genres } from "./Genres";
import { Platforms } from "./Platforms"
import { Publisher } from "./Publisher";


export interface Games {
    id: number;
    name: string;
    slug: string;
    genres:Genres[],
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platforms; }[]; //special type of object want to learn more
    metacritic: number;
    rating_top: number;
    publishers:Publisher[]
}
