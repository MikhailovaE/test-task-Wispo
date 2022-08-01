const showMore = document.getElementById("show-more");
const showLess = document.getElementById("show-less");
const hideCollection = document.getElementsByClassName("tag__item-hide");

const itemsCount = hideCollection.length;

showMore.addEventListener("click", (event) => {
  showMore.style.display = 'none';
  showLess.style.display = 'block';
  for (var j = 0; j <= itemsCount; j++) {
    hideCollection[j].style.display = 'block';
  }
});

showLess.addEventListener("click", (event) => {
    showMore.style.display = 'block';
    showLess.style.display = 'none';
    for (var j = 0; j <= itemsCount; j++) {
        hideCollection[j].style.display = 'none';
      }
  });
