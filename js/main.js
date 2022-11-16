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
        label: "week 10 Validating with the API",
        url: "week10.html"
    }

]

displayList(links);

function displayList(data) {
    data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${element.url}" target="_blank">${element.label}</a>`;
        ol.appendChild(li);
    });
}
