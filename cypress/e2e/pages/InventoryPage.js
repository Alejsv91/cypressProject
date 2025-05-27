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

    visit() {
        cy.visit(this.path);
    }

    validatePage() {
        this.productsTitle.should('be.visible');
        this.inventoryList.should('be.visible');
        this.inventoryItem.should('have.length.greaterThan', 1);
        cy.log('Validating inventory item').then(() => {
            this.inventoryItem.each(($el) => {
                debugger;
                cy.wrap($el).should('not.be.empty').within(() => {
                    this.inventoryItemImage.should('have.attr', 'src');
                });
            })
        })
    }
}

export default InventoryPage