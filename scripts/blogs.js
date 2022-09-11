const url = "https://www.thomasnoroffproject.site/wp-json/wp/v2/posts?per_page=100";

var idArray = [];

var resultsContainer = document.querySelector("#blogs-blogPage")

async function getPage() {
    fetch

    const response = await fetch(url);

    const posts = await response.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {

        var html = ``;
        if (i > 9) {
            var idString = "blogs-hideBlog" + i
            idArray.push(idString);
            html += `<div id="${idString}" hidden>`;

        } else {
            html += `<div>`;
        }
        html +=
            `<a href="blogspes.html?id=${posts[i].id}"> ${posts[i].title.rendered}</a>` +
            ` \n ${posts[i].excerpt.rendered}` +
            `</div>`;

        resultsContainer.innerHTML += html;
    }
}

getPage();

async function showAll() {
    for (let i = 0; i < idArray.length; i++) {
        var elem = document.getElementById(idArray[i]);
        elem.style.display = "block";
    }

    const button = document.getElementById('blogs-buttonShowAll');
    button.style.display = "none";
}