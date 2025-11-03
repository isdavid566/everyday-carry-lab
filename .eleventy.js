
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("fancyHeading", function(text) {
    return `<h1><strong><em>${text}</em></strong></h1>`;
  });

  return {
    markdownTemplateEngine: "njk",
  };
};