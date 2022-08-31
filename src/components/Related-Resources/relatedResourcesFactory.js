import { includes, orderBy } from "lodash";

class RelatedResourcesFactory {

  constructor (resources, currentResourceSlug){
    this.resources = resources.filter(
      (resource) => resource.fields.slug !== currentResourceSlug
    );
    this.currentResourceSlug = currentResourceSlug;
    this.maxResources = 6;
    this.category = null;
    this.tags = [];
  }

  setMaxResources (m) {
    this.maxResources = m;
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

  getResources () {
    const { category, tags, resources, maxResources } = this;
    const identityMap = {};

    if (!!tags === false || tags.length === 0) {
      console.error("RelatedResourcesFactory: Tags not provided, use setTags().");
      return [];
    }

    if (!!category === false) {
      console.error("RelatedResourcesFactory: Category not provided, use setCategory().");
      return [];
    }

    const getSlug = resource => resource.fields.slug;

    const addToMap = resource => {
      const slug = getSlug(resource);
      if (!Object.prototype.hasOwnProperty.call(identityMap, slug)){
        identityMap[slug] = {
          resource: resource,
          points: 0
        };
      }
    };

    const addCategoryPoints = (resource, category) => {
      const categoryPoints = 2;
      const slug = getSlug(resource);

      if (resource.frontmatter.category === category){
        identityMap[slug].points += categoryPoints;
      }
    };

    const addTagsPoints = (resource, tags) => {
      const tagPoint = 1;
      const slug = getSlug(resource);

      resource.frontmatter.tags.forEach((tag) => {
        if (includes(tags, tag)) {
          identityMap[slug].points += tagPoint;
        }
      });
    };

    const getIdentityMapAsArray = () => {
      return Object.keys(identityMap).map((slug) => identityMap[slug]);
    };

    for (let resource of resources) {
      addToMap(resource);
      addCategoryPoints(resource, category);
      addTagsPoints(resource, tags);
    }

    const arrayIdentityMap = getIdentityMapAsArray();

    const relatesResources = orderBy(
      arrayIdentityMap, ["points"], ["desc"]
    );

    return relatesResources.splice(0, maxResources);
  }
}

export default RelatedResourcesFactory;