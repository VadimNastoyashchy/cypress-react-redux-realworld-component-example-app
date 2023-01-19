import CommentList from "./CommentList";
import { BrowserRouter as Router } from 'react-router-dom';
import { comment, comment2, comment3 } from "../../../cypress/mock/Comment";
import CommentListComponent from "../../../cypress/src/components/CommentListComponent";

describe('<CommentList />', () => {
    it('renders', () => {
        cy.mountRedux(
            <Router>
                <CommentList comments={[comment, comment2, comment3]} />
            </Router>
        );

        CommentListComponent
            .commentContainerComponent
            .commentCard
            .should('have.length', 3)
            .and('be.visible');
    });
});