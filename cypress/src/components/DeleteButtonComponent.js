import BaseComponent from "../BaseComponent";

class DeleteButtonComponent extends BaseComponent {
    get deleteButton() {
        return cy.get('.ion-trash-a');
    }
}

export default new DeleteButtonComponent();