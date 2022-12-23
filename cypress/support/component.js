import './commands'
import { mount } from 'cypress/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../src/store'

Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options
  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>
  return mount(wrapped, mountOptions)
})

Cypress.Commands.add('mountRedux', (component, options = {}) => {
  const { reduxStore = store, ...mountOptions } = options
  const wrapped = <Provider store={reduxStore}>{component}</Provider>
  return mount(wrapped, mountOptions)
})