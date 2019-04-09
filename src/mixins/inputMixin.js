export const inputMixin = {
  data: () => ({
    inputRules: [
      v => v && v.length >= 1 || 'Minimum lenghth is 2 characters.'
    ],
    fieldIsRequiredRule: [
      v => !!v || 'This field is required'
    ],
    emailRule: [
      v => !!v || 'E-mail is required',
      v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid'
    ],
    multiSelectRule: [
      v => v && v.length >= 1 || 'Please specify at least one value.'
    ]
  })
}
