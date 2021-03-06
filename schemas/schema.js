// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// import and use all documents
import Home from "./documents/home";
import ImageBlock from "./objects/imageBlock";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Home,
    ImageBlock,
  ]),
});

// now we have access to use imageBlock type inside of home
// we're not actually using it anywhere at the moment, we just defined it.That makes sense
