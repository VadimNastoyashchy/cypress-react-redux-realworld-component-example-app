import BaseComponent from "../BaseComponent";
import CommentContainerComponent from "./CommentContainerComponent";

class CommentListComponent extends BaseComponent {
    commentContainerComponent = CommentContainerComponent;

}

export default new CommentListComponent();