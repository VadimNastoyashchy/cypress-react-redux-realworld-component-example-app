import React from 'react';
import TagsComponent from '../../../cypress/src/components/TagsComponent';
import Tags from './Tags';

describe('<Tags />', () => {
  it('renders without tags', () => {
    cy.mount(<Tags />);

    TagsComponent
      .getElementByText('Loading Tags...')
      .should('be.visible');
  });

  it('renders with tags', () => {
    const tags = ['cypress', 'component', 'testing', 'react'];
    cy.mount(<Tags tags={tags} />);

    TagsComponent
      .tagsList
      .should('have.length', tags.length);

    tags.forEach(elem => {
      TagsComponent.getElementByText(elem).should('be.visible');
    });
  });
});