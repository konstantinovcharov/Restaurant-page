export function loadMenu() {
    const menuTab = document.createElement('div');
    menuTab.classList.add('menu-tab');
    const menuTabH2 = document.createElement('h2');
    menuTabH2.textContent = "Menu";
    const menuTabUl = document.createElement('ul');
    menuTabUl.classList.add('menu-items');

    const menuItems = [
        { name: "Burger", price: "$10" },
        { name: "Fries", price: "$4" },
        { name: "Salad", price: "$8" },
        { name: "Pizza", price: "$12" },
        { name: "Pasta", price: "$10" },
      ];

    menuItems.forEach((item) => {
        const listItem = document.createElement("li");
        const itemName = document.createElement("h3");
        itemName.innerText = item.name;
        const itemPrice = document.createElement("p");
        itemPrice.innerText = item.price;
        listItem.appendChild(itemName);
        listItem.appendChild(itemPrice);
        menuTabUl.appendChild(listItem);
    })

    menuTab.appendChild(menuTabH2);
    menuTab.appendChild(menuTabUl);

    return menuTab;
    
}