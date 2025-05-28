class InventoryPage {
    constructor(path) {
        this.path = path;

    }

    get productsTitle() {
        return cy.get('#inventory_filter_container > div.product_label');
    }

    get inventoryList() {
        return cy.get('div.inventory_list');
    }

    get inventoryItem() {
        return cy.get('div.inventory_item');
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
        return cy.get('button.btn_primary.btn_inventory');
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
}

export default InventoryPage