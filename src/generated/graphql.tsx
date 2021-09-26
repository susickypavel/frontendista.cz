import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Author = Document & {
  __typename?: "Author";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  bioRaw?: Maybe<Scalars["JSON"]>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Slug>;
};

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  image?: Maybe<ImageFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
};

export type AuthorSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
};

export type Block = {
  __typename?: "Block";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars["String"]>;
  style?: Maybe<Scalars["String"]>;
};

export type BlockOrImage = Block | Image;

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Boolean"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Boolean"]>;
};

export type Category = Document & {
  __typename?: "Category";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  description?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Date"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["Date"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["Date"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["Date"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["Date"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Date"]>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["DateTime"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["DateTime"]>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
};

export type File = {
  __typename?: "File";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Float"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["Float"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["Float"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["Float"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["Float"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Float"]>;
};

export type Geopoint = {
  __typename?: "Geopoint";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  alt?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  alt?: Maybe<FloatFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["ID"]>;
  in?: Maybe<Array<Scalars["ID"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars["ID"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["ID"]>;
  nin?: Maybe<Array<Scalars["ID"]>>;
};

export type Image = {
  __typename?: "Image";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  crop?: Maybe<SanityImageCropFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  crop?: Maybe<SanityImageCropSorting>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["Int"]>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars["Int"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars["Int"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars["Int"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars["Int"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["Int"]>;
};

export type Post = Document & {
  __typename?: "Post";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<Author>;
  bodyRaw?: Maybe<Scalars["JSON"]>;
  categories?: Maybe<Array<Maybe<Category>>>;
  mainImage?: Maybe<Image>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars["String"]>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  author?: Maybe<AuthorFilter>;
  mainImage?: Maybe<ImageFilter>;
  publishedAt?: Maybe<DatetimeFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
};

export type PostSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  mainImage?: Maybe<ImageSorting>;
  publishedAt?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
};

export type RootQuery = {
  __typename?: "RootQuery";
  Author?: Maybe<Author>;
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  Post?: Maybe<Post>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  allAuthor: Array<Author>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allPost: Array<Post>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
};

export type RootQueryAuthorArgs = {
  id: Scalars["ID"];
};

export type RootQueryCategoryArgs = {
  id: Scalars["ID"];
};

export type RootQueryDocumentArgs = {
  id: Scalars["ID"];
};

export type RootQueryPostArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars["ID"];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars["ID"];
};

export type RootQueryAllAuthorArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Array<AuthorSorting>>;
  where?: Maybe<AuthorFilter>;
};

export type RootQueryAllCategoryArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Array<CategorySorting>>;
  where?: Maybe<CategoryFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Array<DocumentSorting>>;
  where?: Maybe<DocumentFilter>;
};

export type RootQueryAllPostArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Array<PostSorting>>;
  where?: Maybe<PostFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  where?: Maybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  where?: Maybe<SanityImageAssetFilter>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars["String"]>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars["String"]>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars["String"]>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: "SanityFileAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  altText?: Maybe<Scalars["String"]>;
  assetId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  altText?: Maybe<StringFilter>;
  assetId?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
  title?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
  title?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: "SanityImageAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]>;
  _key?: Maybe<Scalars["String"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]>;
  altText?: Maybe<Scalars["String"]>;
  assetId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  sha1hash?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  altText?: Maybe<StringFilter>;
  assetId?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  mimeType?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
  title?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  mimeType?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
  title?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  bottom?: Maybe<Scalars["Float"]>;
  left?: Maybe<Scalars["Float"]>;
  right?: Maybe<Scalars["Float"]>;
  top?: Maybe<Scalars["Float"]>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
  top?: Maybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  aspectRatio?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars["Boolean"]>;
  isOpaque?: Maybe<Scalars["Boolean"]>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars["String"]>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
  location?: Maybe<GeopointFilter>;
  lqip?: Maybe<StringFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  lqip?: Maybe<SortOrder>;
  palette?: Maybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  foreground?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars["Boolean"]>;
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars["ID"]>;
};

export type Slug = {
  __typename?: "Slug";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  current?: Maybe<Scalars["String"]>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = "ASC",
  /** Sorts on the value in descending order. */
  Desc = "DESC",
}

export type Span = {
  __typename?: "Span";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text?: Maybe<Scalars["String"]>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars["String"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars["String"]>;
  nin?: Maybe<Array<Scalars["String"]>>;
};

export type PostBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type PostBySlugQuery = {
  __typename?: "RootQuery";
  allPost: Array<{
    __typename?: "Post";
    title?: Maybe<string>;
    publishedAt?: Maybe<any>;
  }>;
};

export type PostsSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsSlugsQuery = {
  __typename?: "RootQuery";
  allPost: Array<{
    __typename?: "Post";
    slug?: Maybe<{ __typename?: "Slug"; current?: Maybe<string> }>;
  }>;
};

export const PostBySlugDocument = gql`
  query PostBySlug($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
      publishedAt
    }
  }
`;

/**
 * __usePostBySlugQuery__
 *
 * To run a query within a React component, call `usePostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    PostBySlugQuery,
    PostBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostBySlugQuery, PostBySlugQueryVariables>(
    PostBySlugDocument,
    options
  );
}
export function usePostBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PostBySlugQuery,
    PostBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostBySlugQuery, PostBySlugQueryVariables>(
    PostBySlugDocument,
    options
  );
}
export type PostBySlugQueryHookResult = ReturnType<typeof usePostBySlugQuery>;
export type PostBySlugLazyQueryHookResult = ReturnType<
  typeof usePostBySlugLazyQuery
>;
export type PostBySlugQueryResult = Apollo.QueryResult<
  PostBySlugQuery,
  PostBySlugQueryVariables
>;
export const PostsSlugsDocument = gql`
  query PostsSlugs {
    allPost {
      slug {
        current
      }
    }
  }
`;

/**
 * __usePostsSlugsQuery__
 *
 * To run a query within a React component, call `usePostsSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PostsSlugsQuery,
    PostsSlugsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsSlugsQuery, PostsSlugsQueryVariables>(
    PostsSlugsDocument,
    options
  );
}
export function usePostsSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PostsSlugsQuery,
    PostsSlugsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsSlugsQuery, PostsSlugsQueryVariables>(
    PostsSlugsDocument,
    options
  );
}
export type PostsSlugsQueryHookResult = ReturnType<typeof usePostsSlugsQuery>;
export type PostsSlugsLazyQueryHookResult = ReturnType<
  typeof usePostsSlugsLazyQuery
>;
export type PostsSlugsQueryResult = Apollo.QueryResult<
  PostsSlugsQuery,
  PostsSlugsQueryVariables
>;
