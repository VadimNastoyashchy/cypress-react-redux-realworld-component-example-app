import React from 'react';
import ArticleActions from './ArticleActions';
import { BrowserRouter as Router } from 'react-router-dom';
import { article } from '../../../cypress/mock/Article';
import ArticleActionsComponent from "../../../cypress/src/components/ArticleActionsComponent";

describe('<ArticleActions />', () => {
    it('renders with flag "canModify = false"', () => {
        cy.mountRedux(<ArticleActions article={article} canModify={false} />);
        ArticleActionsComponent.span.should('exist');
    });

    it('renders with flag "canModify = true"', () => {
        cy.mountRedux(
            <Router>
                <ArticleActions article={article} canModify={true} />
            </Router>
        );

        ArticleActionsComponent.editArticleLink.should('be.visible');
        ArticleActionsComponent.deleteArticleButton
            .should('be.visible')
            .and('be.enabled');
    });
});