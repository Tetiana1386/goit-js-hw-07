const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);

const totalCategories = [...itemsEl]
.map(item => 
    `Категория: ${item.children[0].textContent}
     Количество элементов: ${item.children[1].children.length}`
)
.join("\n");

console.log(totalCategories);
