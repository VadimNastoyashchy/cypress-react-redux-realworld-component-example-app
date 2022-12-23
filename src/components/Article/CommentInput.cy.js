import CommentInput from "./CommentInput";
import { BrowserRouter as Router } from 'react-router-dom';
import { currentUser } from "../../../cypress/mock/CurrentUser";

describe('<CommentInput />', () => {
    it('renders', () => {
        cy.mountRedux(
            <Router>
                <CommentInput currentUser={currentUser} />
            </Router>
        );

        cy.get('textarea').invoke('attr', 'placeholder').should('eq', 'Write a comment...');
        cy.get('img').invoke('attr', 'alt').should('eq', currentUser.username);
        cy.contains('button', 'Post Comment').should('be.visible').and('be.enabled');
    });
});