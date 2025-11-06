const header = document.getElementById("header");

let currentPage = null;
const pages = {};

document.querySelectorAll(".page").forEach((page) => {
  const pageName = page.id.replace("page_", "");
  pages[pageName] = page;
  page.style.display = "none";
})

function openPage(pageName) {
  if (pageName == currentPage)
    return;
  
  if (currentPage) {
    document.getElementById("button_"+currentPage).classList.toggle("linkSelected", false);
    pages[currentPage].style.display = "none";
  }
  document.getElementById("button_"+pageName).classList.toggle("linkSelected", true);
  pages[pageName].style.display = "inline";
  currentPage = pageName;
}

openPage("home");
