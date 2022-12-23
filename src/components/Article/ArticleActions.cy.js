import React from 'react';
import ArticleActions from './ArticleActions';
import { BrowserRouter as Router } from 'react-router-dom';
import { article } from '../../../cypress/mock/Article';

describe('<ArticleActions />', () => {
    it('renders with flag "canModify = false"', () => {
        cy.mountRedux(<ArticleActions article={article} canModify={false} />);
        cy.get('span').should('exist');
    });

    it('renders with flag "canModify = true"', () => {
        cy.mountRedux(
            <Router>
                <ArticleActions article={article} canModify={true} />
            </Router>
        );

        cy.contains('a', 'Edit Article').should('be.visible');
        cy.contains('button', 'Delete Article').should('be.visible').and('be.enabled');
    });
});