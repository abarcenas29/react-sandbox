import { createSelector } from 'reselect'

export const AppSelectDomain = () => state => state.App

export const testSelector = () => createSelector(
  AppSelectDomain(),
  subState => subState.get('test')
)
