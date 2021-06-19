// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import company from './company'
import job from './job'
import links from './links'
import speaker from './speaker'
import stage from './stage'
import talk from './talk'
import post from './post'
import author from './author'

import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    company,
    job,
    links,
    speaker,
    stage,
    talk,
    post,
    author,

    excerptPortableText,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText
  ]),
})
