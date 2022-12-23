    import CommentList from "./CommentList";
    import { BrowserRouter as Router } from 'react-router-dom';
    import { comment, comment2, comment3 } from "../../../cypress/mock/Comment";

    describe('<CommentList />', () => {
        it('renders', () => {
            cy.mountRedux(
                <Router>
                    <CommentList comments={[comment, comment2, comment3]} />
                </Router>
            );

            cy.get('.card').should('have.length', 3).and('be.visible');
        });
    });