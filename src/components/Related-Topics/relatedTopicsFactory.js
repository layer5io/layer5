import {includes, orderBy } from "lodash";

class RelatedTopicsFactory {

  constructor (topics, currentTopicSlug){
    this.topics = topics.filter(
      (topic) => topic.fields.slug !== currentTopicSlug
    );
    this.currentTopicSlug = currentTopicSlug;
    this.maxTopics = 6;
    this.category = null;
    this.tags = [];
  }

  setMaxTopics (m) {
    this.maxTopics = m;
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

  getTopics () {
    const { category, tags, topics, maxTopics } = this;
    const identityMap = {};

    if (!!tags === false || tags.length === 0) {
      console.error("RelatedTopicsFactory: Tags not provided, use setTags().");
      return [];
    }

    if (!!category === false) {
      console.error("RelatedTopicsFactory: Category not provided, use setCategory().");
      return [];
    }

    const getSlug = topic => topic.fields.slug;

    const addToMap = topic => {
      const slug = getSlug(topic);
      if(!Object.prototype.hasOwnProperty.call(identityMap, slug)){
        identityMap[slug] = {
          topic: topic,
          points: 0
        };
      }
    };

    const addCategoryPoints = (topic, category) => {
      const categoryPoints = 2;
      const slug = getSlug(topic);

      if(topic.frontmatter.category ===category){
        identityMap[slug].points += categoryPoints;
      }
    };

    const addTagsPoints = (topic, tags) => {
      const tagPoint = 1;
      const slug = getSlug(topic);

      topic.frontmatter.tags.forEach((tag) => {
        if (includes(tags, tag)) {
          identityMap[slug].points += tagPoint;
        }
      });
    };

    const getIdentityMapAsArray = () => {
      return Object.keys(identityMap).map((slug) => identityMap[slug]);
    };

    for (let topic of topics) {
      addToMap(topic);
      addCategoryPoints(topic, category);
      addTagsPoints(topic, tags);
    }

    const arrayIdentityMap = getIdentityMapAsArray();

    const relatesTopics = orderBy(
      arrayIdentityMap, ["points"], ["desc"]
    );

    return relatesTopics.splice(0, maxTopics);
  }
}

export default RelatedTopicsFactory;
