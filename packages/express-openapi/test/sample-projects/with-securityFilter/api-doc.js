module.exports = {
  swagger: '2.0',
  basePath: '/v3/',
  info: {
    title: 'express-openapi sample project',
    version: '3.0.0',
  },
  definitions: {
    Error: {
      additionalProperties: true,
    },
    User: {
      properties: {
        name: {
          type: 'string',
        },
        friends: {
          type: 'array',
          items: {
            $ref: '#/definitions/User',
          },
        },
      },
      required: ['name'],
    },
  },
  paths: {},
  tags: [
    {
      description: 'Everything users',
      name: 'users',
    },
  ],
};
