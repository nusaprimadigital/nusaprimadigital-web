import { PortableTextBlock } from "sanity";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Slug {
  current: string;
  _type: "slug";
}

export interface Author {
  _id?: string;
  name: string;
  image?: SanityImage;
  bio?: PortableTextBlock[];
}

export interface Post {
  _id: string;
  title: string;
  slug: Slug;
  mainImage?: SanityImage;
  publishedAt: string;
  categories?: string[];
  author?: string | Author;
  description?: string;
  body?: PortableTextBlock[];
}

export interface GalleryImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: Slug;
  description: string;
  mainImage?: SanityImage;
  url?: string;
  tags?: string[];
  client?: string;
  year?: string;
  body?: PortableTextBlock[];
  gallery?: GalleryImage[];
}

export interface Service {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
  category?: "wordpress" | "blogger" | "custom" | "other";
  price?: string;
  features?: string[];
  icon?: string;
}
