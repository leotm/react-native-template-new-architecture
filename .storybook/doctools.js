/**
 * TODO: Migrate RN Storybook from 6.5.x to 10 (RN 0.71 to 0.83)
 */

// vscode editor.codeActionsOnSave source.organizeImports conflicting w ESLint only with .js
import { enhanceArgTypes } from '@storybook/docs-tools'
import { extractArgTypes } from '@storybook/react/dist/modern/client/docs/extractArgTypes'
import { addArgTypesEnhancer, addParameters } from '@storybook/react-native'

addArgTypesEnhancer(enhanceArgTypes)
addParameters({
  docs: {
    extractArgTypes
  }
})
