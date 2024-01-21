
export const applyCustomizationToDefinitions = (customizations: any[], definitions: any[], identifier: string) => {

  const mappedVars = (customizations || []).reduce((acc, customization) => {
    customization[identifier] = customization.name
    acc[customization[identifier]] = customization
    return acc
  }, {})
  const { visibleFields, customizedFields } = definitions.reduce(
    (acc, def) => {
      // default values
      def.visible = def.visible === undefined ? true : def.visible
      def.position = def.position === undefined ? true : def.position

      // merge customization
      const customization = mappedVars[def[identifier]] || {}
      const customizedField = {
        ...def,
        ...customization,
      }
      // mapped collections
      acc.customizedFields.push(customizedField)
      if (customizedField.visible) {
        acc.visibleFields.push(customizedField)
      }
      return acc
    },
    { visibleFields: [], customizedFields: [] },
  )

  return {
    visibleFields,
    customizedFields,
  }
}
