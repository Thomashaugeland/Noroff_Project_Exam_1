const url = "https://www.thomasnoroffproject.site/wp-json/wp/v2/posts";
var resultsContainer = document.querySelector(".post0")


async function getPosts() {
    fetch

    const response = await fetch(url);

    const posts = await response.json();

    resultsContainer.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {

        if (i === 4) {
            break;
        }

        resultsContainer = document.querySelector(".post" + i)

        resultsContainer.innerHTML += `<div>${posts[i].title.rendered} \n ${posts[i].excerpt.rendered}</div>`;
    }
}

getPosts();

let slideIndex = 0;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("index-mySlides");
    let dots = document.getElementsByClassName("index-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2500);
}
