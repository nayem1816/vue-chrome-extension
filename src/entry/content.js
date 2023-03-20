/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */

const storeTag = [];

// active tab url
const url = window.location.href;
console.log(url);

// add 

const content = document.getElementById("Panes");
const content2 = document.getElementById("Translation");

for (let i = 0; i < content.children.length; i++) {
  const items = {
    title: "",
    content: "",
  };
  for (let j = 0; j < content.children[i].children.length; j++) {
    if (content.children[i].children[j].tagName != "FORM") {
      if (content.children[i].children[j].tagName == "H2") {
        items.title = content.children[i].children[j].innerText;
      }
      if (content.children[i].children[j].tagName == "P") {
        items.content = content.children[i].children[j].innerText;
      }
    }
  }
  storeTag.push(items);
}

export function scrapeEmailFromPage() {
  const emailRegEx = /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim;
  const allEmails = document.body.innerHTML.match(emailRegEx);
  const emails = [...new Set(allEmails)];
  return emails;
}

chrome.runtime.sendMessage({
  content: storeTag,
  content2: content2.innerHTML,
  emails: scrapeEmailFromPage(),
});
