const resultsContainer = document.querySelector("#blogspes-blogSpes")
const titleContainer = document.querySelector("#title")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogId = params.get("id");
const url = "https://www.thomasnoroffproject.site/wp-json/wp/v2/posts?include[]=" + blogId;
var image
const imageContainer = document.querySelector("#modalImage");


setTimeout(function () {
    async function fetchBlog() {

        try {
            const response = await fetch(url);
            const blog = await response.json();
            console.log(blog);
            createHtml(blog);
            changeTitle(blog);
            createModal();


        } catch { }
    }

    fetchBlog();

    function createHtml(blog) {
        resultsContainer.innerHTML = `<h1>${blog[0].title.rendered}</h1>` +
            `<div id="content">${blog[0].content.rendered}</div>`;
        var content = document.getElementById("content")
        console.log(content);
        image = content.children[1].children[0];
    }


    function changeTitle(blog) {
        titleContainer.innerHTML = `All posts | ${blog[0].title.rendered}`;
    }
    var modal = document.getElementById("myModal");

    function createModal() {
        var modalImage = document.getElementById("modalImage");
        imageContainer.innerHTML = image.outerHTML;
        console.log(image);
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    openModal.onclick = function () {
        modal.style.display = "block";
    }

}, 200);



var openModal = document.getElementById("blogspes-blogSpes");

var span = document.getElementsByClassName("close")[0];




