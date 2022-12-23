import { comment } from '../../../cypress/mock/Comment';
import DeleteButton from './DeleteButton';

describe('<DeleteButton />', () => {
    it('renders', () => {
        cy.mountRedux(<DeleteButton show={true} commentId={comment.id} />);
        cy.get('.ion-trash-a').should('exist');
    });
});