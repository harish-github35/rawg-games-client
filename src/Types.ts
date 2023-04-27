export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  publishers: Publisher[];
}

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  isdeleted: boolean;
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface Publisher {
  id: number;
  slug: string;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
