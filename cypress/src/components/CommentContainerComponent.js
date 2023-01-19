import BaseComponent from "../BaseComponent";
import CommentComponent from "./CommentComponent";

class CommentContainerComponent extends BaseComponent {
    commentComponent = CommentComponent;

    get commentCard() {
        return cy.get('.card');
    }
}

export default new CommentContainerComponent();