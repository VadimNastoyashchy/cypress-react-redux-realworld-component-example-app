import React from 'react';
import BannerComponent from '../../../cypress/src/components/BannerComponent';
import Banner from './Banner';

describe('<Banner />', () => {
  it('renders', () => {
    const title = 'App Name';
    cy.mount(<Banner appName={title} />);

    BannerComponent
      .getElementByText(title.toLocaleLowerCase(), '.logo-font')
      .should('be.visible');

    BannerComponent
      .getElementByText('A place to share your knowledge.', 'p')
      .should('be.visible');
  });
});