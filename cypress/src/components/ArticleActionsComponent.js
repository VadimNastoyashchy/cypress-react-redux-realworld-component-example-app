import BaseComponent from "../BaseComponent";

class ArticleActionsComponent extends BaseComponent {
    get editArticleLink() {
        return cy.contains('a', 'Edit Article');
    }

    get deleteArticleButton() {
        return cy.contains('button', 'Delete Article');
    }

}

export default new ArticleActionsComponent();
