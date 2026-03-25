// sanity/lib/queries.ts
import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  description,
  "categories": categories[]->title,
  "author": author->name
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  body,
  publishedAt,
  description,
  "categories": categories[]->title,
  "author": author->{name, image, bio},
}`;

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  mainImage,
  url,
  tags,
  client,
  year
}`;

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  mainImage,
  url,
  tags,
  client,
  year,
  body,
  gallery[] {
    asset,
    alt,
    caption
  }
}`;
