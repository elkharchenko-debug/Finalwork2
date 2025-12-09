document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Эфиопия Сидамо",
            roast: "средняя обжарка",
            description: "Яркий вкус с нотами цитрусовых и ягод. Идеален для альтернативных методов заваривания.",
            price: "890 ₽",
            weight: "250 г",
            image: "images/coffee1.jpg"
        },
        {
            name: "Бразилия Сантос",
            roast: "средняя обжарка",
            description: "Классический шоколадно-ореховый профиль, подходит для эспрессо и капучино.",
            price: "760 ₽",
            weight: "250 г",
            image: "images/coffee2.jpg"
        },
        {
            name: "Колумбия Супремо",
            roast: "светлая обжарка",
            description: "Сбалансированный вкус с лёгкой фруктовой кислинкой и сладким послевкусием.",
            price: "840 ₽",
            weight: "250 г",
            image: "images/coffee3.jpg"
        },
        {
            name: "Гватемала Антигуа",
            roast: "средняя обжарка",
            description: "Плотное тело, ноты какао и пряностей. Отлично раскрывается во френч-прессе.",
            price: "910 ₽",
            weight: "250 г",
            image: "images/coffee4.jpg"
        },
        {
            name: "Кения АА",
            roast: "светлая обжарка",
            description: "Сочный вкус чёрной смородины и цитрусов с длительным послевкусием.",
            price: "950 ₽",
            weight: "250 г",
            image: "images/coffee5.jpg"
        },
        {
            name: "Эспрессо-бленд №1",
            roast: "тёмная обжарка",
            description: "Плотный и сладкий эспрессо с густой крема и нотами горького шоколада.",
            price: "820 ₽",
            weight: "250 г",
            image: "images/coffee6.jpg"
        },
        {
            name: "Декаф Колумбия",
            roast: "средняя обжарка",
            description: "Без кофеина, но с полноценным вкусом. Отлично подойдёт для вечерней чашки.",
            price: "870 ₽",
            weight: "250 г",
            image: "images/coffee7.jpg"
        },
        {
            name: "Домашняя смесь",
            roast: "средняя обжарка",
            description: "Фирменный бленд CoffeeTime для каждого дня. Универсален для любых методов.",
            price: "790 ₽",
            weight: "250 г",
            image: "images/coffee8.jpg"
        }
    ];

    const container = document.getElementById("products-container");

    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-4 col-sm-6";

        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <span class="badge-coffee mb-2">${product.roast}</span>
                    <p class="card-text flex-grow-1">${product.description}</p>
                    <p class="mb-1"><span class="price">${product.price}</span> / ${product.weight}</p>
                    <a href="contact.html" class="btn btn-coffee mt-2">Заказать</a>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
});
