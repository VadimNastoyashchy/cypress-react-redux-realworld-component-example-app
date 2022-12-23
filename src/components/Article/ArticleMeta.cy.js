import React from 'react';
import ArticleMeta from './ArticleMeta';
import { BrowserRouter as Router } from 'react-router-dom';
import { article } from '../../../cypress/mock/Article';

describe('<ArticleMeta />', () => {
  it('renders without <ArticleActions />', () => {
    cy.mountRedux(
      <Router>
        <ArticleMeta article={article} canModify={false} />
      </Router>
    );

    cy.contains(article.author.username).should('be.visible');
    cy.contains(new Date(article.createdAt).toDateString()).should('be.visible');
    cy.contains('a', 'Edit Article').should('not.exist');
    cy.contains('button', 'Delete Article').should('not.exist');
  });

  it('renders with <ArticleActions />', () => {
    cy.mountRedux(
      <Router>
        <ArticleMeta article={article} canModify={true} />
      </Router>
    );

    cy.contains(article.author.username).should('be.visible');
    cy.contains(new Date(article.createdAt).toDateString()).should('be.visible');
    cy.contains('a', 'Edit Article').should('be.visible');
    cy.contains('button', 'Delete Article').should('be.visible').and('be.enabled');
  });
});