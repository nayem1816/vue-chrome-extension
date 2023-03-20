/* eslint-disable no-unused-vars */

let contentData = [];

chrome.runtime.onMessage.addListener(async (request) => {
  let content = await request.content;
  let content2 = await request.content2;
  let emails = await request.emails;

  contentData.push(content, content2, emails);

  console.log(content, content2, emails);
});

module.exports = contentData;
