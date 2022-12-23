import { BrowserRouter as Router } from 'react-router-dom';
import { comment, comment2, comment3 } from '../../../cypress/mock/Comment';
import { currentUser } from '../../../cypress/mock/CurrentUser';
import CommentContainer from './CommentContainer';

describe('<CommentContainer />', () => {
    it('renders for unauthorized user', () => {
        cy.mountRedux(
            <Router>
                <CommentContainer comments={[comment, comment2, comment3]} />
            </Router>
        );

        cy.contains('Sign in').should('be.visible');
        cy.contains('sign up').should('be.visible')
        cy.get('.card').should('have.length', 3).and('be.visible');
    });

    it('renders for authorized user', () => {
        cy.mountRedux(
            <Router>
                <CommentContainer comments={[comment, comment2, comment3]} currentUser={currentUser} />
            </Router>
        );

        cy.contains(currentUser.username).should('be.visible');
        cy.get('div.card').should('have.length', 3).and('be.visible');
    });
});