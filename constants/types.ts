import { priorityHeightMap } from './skills';

export type CollectionType<T> = {
  id: number;
  attributes: T;
};

export type ComponentType<T extends { [key: string]: any }> = {
  [K in keyof T]: T[K];
} & { id: number };

export type Contact = CollectionType<{
  title: string;
  link: string;
  icon: ImageData;
}>;

export type Project = CollectionType<{
  title: string;
  role: string;
  description: string;
  link: string;
  lazyVideo: LazyVideo;
}>;

export type Skill = CollectionType<{
  name: string;
  image: ImageData;
  link: string;
  priority: keyof typeof priorityHeightMap;
}>;

export type Hobby = CollectionType<{
  title: string;
  details: string;
  lazyVideo: LazyVideo;
}>;

export type Experience = CollectionType<{
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  details: string;
  link: string;
  image: ImageData;
}>;

export type LazyVideo = ComponentType<{
  video: VideoData;
  poster: ImageData;
}>;

// the following types are mostly just inferred based on the strapi response

export type VideoData = {
  data: CollectionType<{
    name: string;
    alternativeText: string;
    caption: string;
    width: number | null;
    height: number | null;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    // also not sure what this is
    provider_metadata: null;
    // string that can be converted to a date object
    createdAt: string;
    updatedAt: string;
  }>;
};

export type ImageData = {
  data: CollectionType<{
    name: string;
    alternativeText: string;
    caption: string;
    width: number | null;
    height: number | null;
    formats: { [K in 'small' | 'medium' | 'large' | 'thumbnail']: FormatType };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type FormatType = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};
