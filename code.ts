// This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

// const nodes: SceneNode[] = [];
// for (let i = 0; i < numberOfRectangles; i++) {
//   const rect = figma.createRectangle();
//   rect.x = i * 150;
//   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
//   figma.currentPage.appendChild(rect);
//   nodes.push(rect);
// }
// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.

let pages = [
  "Cover",
  "-------------",
  "Style Components",
  "Typography Components",
  "-------------",
  "Wireframes",
  "-------------",
  "Design-v1 In Progress",
  "Design-v2 In Progress",
  "Design-v3 In Progress",
  "-------------",
  "Icon/FavIcons",
  "Assets",
  "Discovery",
  "References",
  "Junkyard",
];

let currentPage = figma.currentPage;
currentPage.name = pages[0];

for (let page of pages.slice(1)) {
  let newPage = figma.createPage();
  newPage.name = page;
}
figma.notify("Pages Created Successfully!");

figma.closePlugin();
