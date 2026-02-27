let items = []; // this is like a db for persistence, except that its client side

const itemsDiv = document.getElementById("items");

function renderItems() {
    itemsDiv.innerHTML = null; // fresh slate to start adding items

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx) // js calls the function immediately if not wrapped as such 

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function loadItems() {

}

function saveItems() {

}

function addItem() {

}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
}