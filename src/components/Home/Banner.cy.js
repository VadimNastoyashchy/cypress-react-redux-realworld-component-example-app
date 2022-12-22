import React from 'react';
import Banner from './Banner';

describe('<Banner />', () => {
  it('renders', () => {
    const title = 'App Name';
    cy.mount(<Banner appName={title} />);
    cy.contains('.logo-font', title.toLocaleLowerCase()).should('be.visible');
    cy.contains('p', 'A place to share your knowledge.').should('be.visible');
  });
});