const path = require("path");

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const createPages = ({ actions: { createPage } }) => {
  const template = path.resolve(`src/templates/Demo.js`);
  
  createPage({
    path: `page1`,
    component: `${template}?__contentFilePath=page1`,
    context: { name: "page1" },
  });

  createPage({
    path: `page2`,
    component: `${template}?__contentFilePath=page2`,
    context: { name: "page2" },
  });
};

module.exports = { createPages };
