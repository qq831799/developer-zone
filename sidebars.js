/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      'Getting Started':[
         'Getting Started/Overview',
         'Getting Started/Try out Hello Plugin',
       ],
     },
    {
      'Main Concept':[
        'Main Concept/Architecture',
        'Main Concept/Features',
        'Main Concept/API Overview',
      ],
    },
    'Create a Plugin',
    'Build a Plugin Package',
    {
      'Implement Features': [
        'Implement Features/Properties',
        'Implement Features/States',
        'Implement Features/Commands',
        'Implement Features/Alerts',
        'Implement Features/Metrics',
        'Implement Features/Events',
        'Implement Features/Configs',
      ],
    },
    
  ],
  api: [
    'API Reference',
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
