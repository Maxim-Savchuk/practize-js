/**
 *  - Работаем с коллекцией товаров в корзине:
 *  - getItems()
 *  - add(product)
 *  - remove(productName)
 *  - clear()
 *  - countTotalPrice()
 *  - increaseQuantity(productName)
 *  - decreaseQuantity(productName)
 * 
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍊', price: 110 }
 */

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product);
    },
    remove(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i];

            if (productName === item.name) {
                console.log('Нашли такой продукт', productName)
            }
        }
    },
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
}

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍊', price: 110 });

cart.remove('');