export const movieListSchema = {
  type: 'object',
  additionalProperties: true,
  required: ['Search'],
  definitions: {
    omdbitem: {
      type: 'object',
      properties: {
        Title: {
          type: 'string'
        },
        imdbID: {
          type: 'string'
        },
        Year: {
          type: 'string'
        },
        Type: {
          type: 'string'
        },
        Poster: {
          type: 'string'
        }
      }
    }
  },
  properties: {
    Search: {
      type: 'array',
      items: {
        $ref: '#/definitions/omdbitem'
      }
    }
  }
};
