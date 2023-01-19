import React from 'react';
import ArticleMeta from './ArticleMeta';
import { BrowserRouter as Router } from 'react-router-dom';
import { article } from '../../../cypress/mock/Article';
import ArticleMetaComponent from "../../../cypress/src/components/ArticleMetaComponent";

describe('<ArticleMeta />', () => {
    it('renders without <ArticleActions />', () => {
        cy.mountRedux(
            <Router>
                <ArticleMeta article={article} canModify={false} />
            </Router>
        );

        ArticleMetaComponent
            .getElementByText(article.author.username)
            .should('be.visible');
        ArticleMetaComponent
            .getElementByText(new Date(article.createdAt).toDateString())
            .should('be.visible');
        ArticleMetaComponent
            .getElementByText('Edit Article', 'a')
            .should('not.exist');
        ArticleMetaComponent
            .articleActionsComponent.deleteArticleButton
            .should('not.exist');
    });

    it('renders with <ArticleActions />', () => {
        cy.mountRedux(
            <Router>
                <ArticleMeta article={article} canModify={true} />
            </Router>
        );

        ArticleMetaComponent
            .getElementByText(article.author.username)
            .should('be.visible');
        ArticleMetaComponent
            .getElementByText(new Date(article.createdAt).toDateString())
            .should('be.visible');
        ArticleMetaComponent
            .getElementByText('Edit Article', 'a')
            .should('be.visible');
        ArticleMetaComponent
            .articleActionsComponent.deleteArticleButton
            .should('be.visible')
            .and('be.enabled');
    });
});