import { comment } from '../../../cypress/mock/Comment';
import DeleteButtonComponent from '../../../cypress/src/components/DeleteButtonComponent';
import DeleteButton from './DeleteButton';

describe('<DeleteButton />', () => {
    it('renders', () => {
        cy.mountRedux(<DeleteButton show={true} commentId={comment.id} />);
        DeleteButtonComponent
            .deleteButton
            .should('exist');
    });
});