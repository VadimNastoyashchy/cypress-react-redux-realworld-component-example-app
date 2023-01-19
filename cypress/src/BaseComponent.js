export default class BaseComponent {
    get span() {
        return cy.get('span');
    }

    get img() {
        return cy.get('img');
    }

    get textarea() {
        return cy.get('textarea');
    }

    /**
     * Custom method returns Cypress wrapped HTML element from the dom.
     * @param {string} text - The element text.
     * @param {string} [selector] - The element selector.
     * @returns  Cypress.Chainable
     * @example
     * .getElementByText('Edit Article', 'a');
     */
    getElementByText(text, selector) {
        if (text && selector) {
            return cy.contains(selector, text);
        } else {
            return cy.contains(text);
        }
    }
}