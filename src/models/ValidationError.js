const { GraphQLError } = require('graphql')

class ValidationError extends GraphQLError {
  constructor(error) {
    super('Invalid requestasas')
    this.state = [{
        errorTeste: 'TESTEEE'
    }]
  }
}

module.exports = ValidationError