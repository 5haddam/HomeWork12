vegetables = ['cabbage', 'avocado', 'tomato'];
vegetablesPrice = [8, 30, 10];
fruits = ['grapes', 'raspberry', 'coconut'];
fruitsPrice = [20, 25, 50];

do {
    season = prompt('Enter season please (Winter or Summer)?');
    season = season ? season.replaceAll(' ', '').toLowerCase() : season;
} while (!season || !(season === 'summer' || season === 'winter'));

switch (season) {
    case 'summer':
        multiplier = 0.8;
        break;
    case 'winter':
        multiplier = 2;
        break;
}

do {
    category = prompt('Enter a category please (Vegetables or fruits)?');
    category = category ? category.replaceAll(' ', '').toLowerCase() : category;
} while (!category || !(category === 'vegetables' || category === 'fruits'));

do {
    goods = prompt(`Enter the goods in your category (${category}) please?`);
    goods = goods ? goods.replaceAll(' ', '').toLowerCase() : goods;
} while (!goods || category === 'vegetables' ? vegetables.indexOf(goods) === -1 : fruits.indexOf(goods) === -1);

do {
    countOfProducts = parseInt(prompt(`Enter a count of ${goods}`));
} while (isNaN(countOfProducts));

switch (category) {
    case 'vegetables':
        finalSum = vegetablesPrice[vegetables.indexOf(goods)] * countOfProducts * multiplier;
        break;
    case 'fruits':
        finalSum = fruitsPrice[fruits.indexOf(goods)] * countOfProducts * multiplier;
        break;
}

document.write(`
    <div class="product" align="center">
        <img src="images/${category}/${goods}.svg" alt="${goods}" width="100" height="100">
        <p>Selected product: <b>${goods}</b></p>
        <p>Count of ${goods}s: <b>${countOfProducts}</b></p>
        <p>Selected period: <b>${season}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalSum} UAH</b></p>
    </div>
`)