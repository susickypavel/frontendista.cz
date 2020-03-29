export const POST_SLUGS = "*[_type == 'post'].slug.current";
export const GET_POST_USING_SLUG = "*[_type == 'post' && slug.current == $slug][0]";

export interface GetPostUsingSlugQuery {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: string;
  _rev: string;
  content: any;
  slug: {
    _type: "slug";
    current: string;
  };
  thumbnail: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  title: string;
}

export interface GetPostUsingSlugVariables {
  slug: string;
}
