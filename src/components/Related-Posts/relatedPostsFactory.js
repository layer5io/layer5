import { includes, orderBy } from "lodash";

class RelatedPostsFactory {

  constructor (posts, currentPostSlug){
    this.posts = posts.filter(
      (post) => post.fields.slug !== currentPostSlug
    );
    this.currentPostSlug = currentPostSlug;
    this.maxPosts = 6;
    this.category = null;
    this.tags = [];
  }

  setMaxPosts (m) {
    this.maxPosts = m;
    return this;
  }

  setCategory (category) {
    this.category = category;
    return this;
  }

  setTags (tags) {
    this.tags = tags;
    return this;
  }

  getPosts () {
    const { category, tags, posts, maxPosts } = this;
    const identityMap = {};

    if (!!tags === false || tags.length === 0) {
      console.error("RelatedPostsFactory: Tags not provided, use setTags().");
      return [];
    }

    if (!!category === false) {
      console.error("RelatedPostsFactory: Category not provided, use setCategory().");
      return [];
    }

    const getSlug = post => post.fields.slug;

    const addToMap = post => {
      const slug = getSlug(post);
      if (!Object.prototype.hasOwnProperty.call(identityMap, slug)){
        identityMap[slug] = {
          post : post,
          points : 0
        };
      }
    };

    const addCategoryPoints = (post, category) => {
      const categoryPoints = 2;
      const slug = getSlug(post);

      if (post.frontmatter.category ===category){
        identityMap[slug].points += categoryPoints;
      }
    };

    const addTagsPoints = (post, tags) => {
      const tagPoint = 1;
      const slug = getSlug(post);

      post.frontmatter.tags.forEach((tag) => {
        if (includes(tags, tag)) {
          identityMap[slug].points += tagPoint;
        }
      });
    };

    const getIdentityMapAsArray = () => {
      return Object.keys(identityMap).map((slug) => identityMap[slug]);
    };

    for (let post of posts) {
      addToMap(post);
      addCategoryPoints(post, category);
      addTagsPoints(post, tags);
    }

    const arrayIdentityMap = getIdentityMapAsArray();

    const relatesPosts = orderBy(
      arrayIdentityMap, ["points"], ["desc"]
    );

    return relatesPosts.splice(0, maxPosts);
  }
}

export default RelatedPostsFactory;
