import BaseComponent from "../BaseComponent";

class TagsComponent extends BaseComponent {

    get tagsList() {
        return cy.get('[data-cy="tag"]');
    }

}

export default new TagsComponent();