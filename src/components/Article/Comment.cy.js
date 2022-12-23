import { BrowserRouter as Router } from 'react-router-dom';
import Comment from './Comment';
import { comment } from '../../../cypress/mock/Comment';

describe('<Comment />', () => {
    it('renders', () => {
        cy.mountRedux(
            <Router>
                <Comment comment={comment} />
            </Router>
        );

        cy.contains(comment.body).should('be.visible');
        cy.get('img').invoke('attr', 'alt').should('eq', comment.author.username);
        cy.contains(comment.author.username).should('be.visible');
        cy.contains(new Date(comment.createdAt).toDateString()).should('be.visible');
    });
});