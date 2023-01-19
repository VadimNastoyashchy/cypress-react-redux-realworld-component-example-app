import { BrowserRouter as Router } from 'react-router-dom';
import { comment, comment2, comment3 } from '../../../cypress/mock/Comment';
import { currentUser } from '../../../cypress/mock/CurrentUser';
import CommentContainerComponent from '../../../cypress/src/components/CommentContainerComponent';
import CommentContainer from './CommentContainer';

describe('<CommentContainer />', () => {
    it('renders for unauthorized user', () => {
        cy.mountRedux(
            <Router>
                <CommentContainer comments={[comment, comment2, comment3]} />
            </Router>
        );

        CommentContainerComponent
            .getElementByText('Sign in')
            .should('be.visible');

        CommentContainerComponent
            .getElementByText('sign up')
            .should('be.visible');

        CommentContainerComponent.commentCard
            .should('have.length', 3)
            .and('be.visible');
    });

    it('renders for authorized user', () => {
        cy.mountRedux(
            <Router>
                <CommentContainer comments={[comment, comment2, comment3]} currentUser={currentUser} />
            </Router>
        );

        CommentContainerComponent
            .getElementByText(currentUser.username)
            .should('be.visible');

        CommentContainerComponent.commentCard
            .should('have.length', 4)
            .and('be.visible');
    });
});