const ShoppingBasketService = require('./shoppingbasket');

describe('ShoppingBasketService', () => {
    
        it('should add an item to the basket', () => {
            const service = new ShoppingBasketService();
            service.addItem('Game of Thrones', '9.00', 1);
            expect(service.basketFor('Game of Thrones').items.length).toBe(1);
        });
    
        it('should add two items to the basket', () => {
            const service = new ShoppingBasketService();
            service.addItem('Breaking Band', '7.00', 1);
            service.addItem('Breaking Band', '7.00', 1); 
            expect(service.basketFor('Breaking Band').items.length).toBe(2);  
        });




    });