const upstreamTransformer = require("@expo/metro-config/babel-transformer");
const MdxTransformer = require("@tymekv/mdx/metro-transformer");

module.exports.transform = async (props) => {
  // Then pass it to the upstream transformer.
  return upstreamTransformer.transform(
    // Transpile MDX first.
    await MdxTransformer.transform(props)
  );
};
