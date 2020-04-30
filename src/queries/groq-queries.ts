export const POST_SLUGS = "*[_type == 'post'].slug.current";
export const GET_POST_USING_SLUG = `*[_type == 'post' && slug.current == $slug][0]{
  "thumbnail": thumbnail.asset-> {
    "id": _id,
    "dimensions": {
    	"height": metadata.dimensions.height,
      "width": metadata.dimensions.width
    },
  },
  content[] {
    ...,
    asset-> {
      "id": _id,
    	"dimensions": {
				"height": metadata.dimensions.height,
      	"width": metadata.dimensions.width,
  		}
  	}
  },
  ...
}`;

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
    id: string;
    dimensions: {
      height: number;
      width: number;
    };
  };
  title: string;
  subtitle: string;
}

export interface GetPostUsingSlugVariables {
  slug: string;
}

export const POST_PREVIEWS = `*[_type == 'post'] {
  subtitle,
  title,
  _createdAt,
  "slug": slug.current,
  "thumbnail": thumbnail.asset-> {
    "id": _id,
    "aspectRatio": metadata.dimensions.height / metadata.dimensions.width
  }
} | order(_createdAt desc)`;

export interface PostPreviewsQuery {
  subtitle: string;
  title: string;
  _createdAt: string;
  slug: string;
  thumbnail: {
    id: string;
    aspectRatio: number;
  };
}
