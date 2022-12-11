
    
    //     constructor() {}
    //     addItem(userId: UserID, productId: ProductID, quantity: number) {}
    //     basketFor(userId: UserID) {}
    //   }

      class ShoppingBasketService {
        constructor() {
            this.baskets = [];
    
        }
    
        addItem(userId, product, quantity) {
            if (!this.baskets[userId]) {
            this.baskets[userId] = { items: []};
        }
    

        this.baskets[userId].items.push({
            product, quantity });


        }
      
        basketFor(userId) {
            return this.baskets[userId] || { items: [] };

        }
    

    }
        
    
        // getTotalPrice() {
        //     let totalPrice = 0;
        //     this.items.forEach((candy) => {
        //         totalPrice += candy.getPrice();
        //     });
        //     return totalPrice - this.discount;
        // }
    
    
    module.exports = ShoppingBasketService;