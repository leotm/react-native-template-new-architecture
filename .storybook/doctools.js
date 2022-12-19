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
