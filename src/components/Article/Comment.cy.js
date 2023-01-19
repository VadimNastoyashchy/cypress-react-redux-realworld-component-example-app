import { BrowserRouter as Router } from 'react-router-dom';
import Comment from './Comment';
import { comment } from '../../../cypress/mock/Comment';
import CommentComponent from '../../../cypress/src/components/CommentComponent';

describe('<Comment />', () => {
    it('renders', () => {
        cy.mountRedux(
            <Router>
                <Comment comment={comment} />
            </Router>
        );

        CommentComponent
            .getElementByText(comment.body)
            .should('be.visible');

        CommentComponent.img
            .invoke('attr', 'alt')
            .should('eq', comment.author.username);

        CommentComponent
            .getElementByText(comment.author.username)
            .should('be.visible');

        CommentComponent
            .getElementByText(new Date(comment.createdAt).toDateString())
            .should('be.visible');
    });
});