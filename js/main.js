// GET ELEMENTS
const ol = document.getElementById("List-of-links");

// CREATE A LIST
const links = [
    {
        label: "week1 link",
        url: "#"
    },
    {
        label: "week2 link",
        url: "#"
    },
    {
        label: "week3 link",
        url: "#"
    }
]

displaList(links);

function displaList(data) {
    data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${element.url}" target="_blank">${element.label}</a>`;
        ol.appendChild(li);
    });
}
