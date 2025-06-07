class InventoryPage {
    constructor(path) {
        this.path = path;
    }

    REMOVE = 'REMOVE';

    //selector String
    get inventoryItemSelector(){
        return 'div.inventory_item';
    }

    get inventoryItemAddCartButtonSelector(){
        return 'button.btn_primary.btn_inventory';
    }

    get inventoryRemoveButtonSelector(){
        return 'div.pricebar > button'
    }

    //selectors
    get inentoryRemoveButton(){
        return cy.get('div.pricebar > button');
    }


    get productsTitle() {
        return cy.get('#inventory_filter_container > div.product_label');
    }

    get inventoryList() {
        return cy.get('div.inventory_list');
    }

    get inventoryItem() {
        return cy.get(this.inventoryItemSelector);
    }

    get inventoryItemImage() {
        return cy.get('img.inventory_item_img');
    }

    get inventoryItemTitle(){
        return cy.get('div.inventory_item_name');
    }
    
    get inventoryItemPrice(){
        return cy.get('div.inventory_item_price');
    }

    get inventoryItemAddCartButton(){
        return cy.get(this.inventoryItemAddCartButtonSelector);
    }


    visit() {
        cy.visit(this.path);
    }

    validatePage() {
        this.productsTitle.should('be.visible');
        this.inventoryList.should('be.visible');
        this.inventoryItem.should('have.length.greaterThan', 1);
        cy.log('Validating inventory item').then(() => {
            this.inventoryItem.each(($el) => {
                cy.wrap($el).should('not.be.empty').within(() => {
                    this.inventoryItemImage.should('have.attr', 'src');
                    this.inventoryItemTitle.should('be.visible');
                    this.inventoryItemPrice.should('be.visible');
                    this.inventoryItemAddCartButton.should('be.visible').should('be.enabled');                    
                });
            })
        })
    }

    addItemInCart(itemText) {
        this.inventoryItemTitle.contains(itemText).closest(this.inventoryItemSelector)
        .within(()=>{
            this.inventoryItemAddCartButton.click().then(()=>{
                this.inentoryRemoveButton.should('have.text',this.REMOVE);
            });
            // cy.find(this.inventoryItemAddCartButtonSelector).click();
            cy.wait(100000);
        })
        // this.inventoryItemTitle.each(($el)=>{
        //     debugger;
        // })
        

    }
}

export default InventoryPage