// helper function

const cl = (x) => console.log(x);

// array of category titles

const listCatArr = Array.from(document.querySelectorAll("#categories>li"));

cl("Number of categories: " + listCatArr.length);

// loop to get the console log with category names and corresponding number of items

const list = document.querySelector(".item");
const listTitles = document.querySelectorAll(".item>h2");
const listsInsideList = document.querySelectorAll(".item>ul");

for (let i = 0; i < listTitles.length; i++) {
  let t = listTitles[i].textContent;
  let listArr = listsInsideList[i].querySelectorAll("li");
  let listLen = listArr.length;
  cl("Category: " + t + "\n" + "Elements: " + listLen);
};

