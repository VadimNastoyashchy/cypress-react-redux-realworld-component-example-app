import CommentInput from "./CommentInput";
import { BrowserRouter as Router } from 'react-router-dom';
import { currentUser } from "../../../cypress/mock/CurrentUser";
import CommentInputComponent from "../../../cypress/src/components/CommentInputComponent";

describe('<CommentInput />', () => {
    it('renders', () => {
        cy.mountRedux(
            <Router>
                <CommentInput currentUser={currentUser} />
            </Router>
        );

        CommentInputComponent.textarea
            .invoke('attr', 'placeholder')
            .should('eq', 'Write a comment...');
        CommentInputComponent.img
            .invoke('attr', 'alt')
            .should('eq', currentUser.username);
        CommentInputComponent
            .getElementByText('Post Comment', 'button')
            .should('be.visible')
            .and('be.enabled');
    });
});