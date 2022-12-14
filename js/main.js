// GET ELEMENTS
const ol = document.getElementById("List-of-links");

// CREATE A LIST
const links = [
    {
        label: "week1 link",
        url: "#"
    },
    {
        label: "week 2 Exercises",
        url: "week02.html"
    },
    {
        label: "week 3 Exercise",
        url: "week03.html"
    },
    {
        label: "week 4 Exercise",
        url: "week04.html"
    },
    {
        label: "week 6 ToDos",
        url: "todo.html"
    },
    {
        label: "week 7 Ajax",
        url: "ajax.html"
    },
    {
        label: "week 8 Animations",
        url: "week08.html"
    },
    {
        label: "week 9 Multimedia",
        url: "week09.html"
    },
    {
        label: "week 10 Validating",
        url: "week10.html"
    },
    {
        label: "Pokemon Zone app",
        url: "pokemonZone/index.html"
    }

]

displayList(links);

function displayList(data) {
    data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<a id='background-pic' href="${element.url}" target="_blank">
                            <div id='image-space'>
                                <img src='images/desarrollo-web.png' alt='laptop B&W'>
                            </div>
                            <div id='link-space'>
                                <p>${element.label}</p>
                            </div>
                        </a>`;
        ol.appendChild(li);
    });
}
