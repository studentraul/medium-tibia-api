const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const { getCharacterInfos } = require('../services/character.service')

const CharacterType = new GraphQLObjectType({
  name: 'character',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (root, args) => root.name,
    },
    formerNames: {
      type: GraphQLString,
      resolve: (root, args) => root.formerNames,
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
    formerWorld: {
      type: GraphQLString,
      resolve: (root, args) => root.formerWorld,
    },
    residence: {
      type: GraphQLString,
      resolve: (root, args) => root.residence,
    },
    house: {
      type: GraphQLString,
      resolve: (root, args) => root.house,
    },
    guildMembership: {
      type: GraphQLString,
      resolve: (root, args) => root.guildMembership,
    },
    lastLogin: {
      type: GraphQLString,
      resolve: (root, args) => root.lastLogin,
    },
    comment: {
      type: GraphQLString,
      resolve: (root, args) => root.comment,
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
