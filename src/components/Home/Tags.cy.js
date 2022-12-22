import React from 'react';
import Tags from './Tags';

describe('<Tags />', () => {
  it('renders without tags', () => {
    cy.mount(<Tags />);
    cy.contains('Loading Tags...').should('be.visible');
  });

  it('renders with tags', () => {
    const tags = ['cypress', 'component', 'testing', 'react'];
    cy.mount(<Tags tags={tags} />);
    cy.get('[data-cy="tag"]').should('have.length', tags.length);
    tags.forEach(elem => {
      cy.contains(elem).should('be.visible');
    });
  });
});