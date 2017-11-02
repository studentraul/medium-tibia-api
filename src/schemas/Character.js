const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const { getCharacterInfos } = require('../services/character.service')

const ValidationError = require('../models/ValidationError')

const CharacterType = new GraphQLObjectType({
  name: 'character',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (root, args) => root.name,
    },
    sex: {
      type: GraphQLString,
      resolve: (root, args) => root.sex,
    },
    vocation: {
      type: GraphQLString,
      resolve: (root, args) => root.vocation,
    },
    level: {
      type: GraphQLString,
      resolve: (root, args) => root.level,
    },
    achievementPoints: {
      type: GraphQLString,
      resolve: (root, args) => root.achievementPoints,
    },
    world: {
      type: GraphQLString,
      resolve: (root, args) => root.world,
    },
    residence: {
      type: GraphQLString,
      resolve: (root, args) => root.residence,
    },
    lastLogin: {
      type: GraphQLString,
      resolve: (root, args) => root.lastLogin,
    },
    accountStatus: {
      type: GraphQLString,
      resolve: (root, args) => root.accountStatus,
    },
  }),
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'player',
    description:
      "This is my schema which will inform all player's informations",

    fields: () => ({
      player: {
        type: CharacterType,
        args: {
          nickname: {
            type: GraphQLString,
          },
        },
        resolve: (root, args) => getCharacterInfos(args.nickname),
      },
    }),
  }),
})
