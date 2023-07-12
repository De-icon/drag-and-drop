const list =document.getElementsByClassName('list')
const right= document.getElementById('right')
const left = document.getElementById('left')

for (list of list) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target

        right.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        right.addEventListener("drop", function (e) {
            right.appendChild(selected);
            selected = null
        })
    })
}

