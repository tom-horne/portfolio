export const HOME_QUERY = `
query Home {
  home {
    content {
      ... on TextRecord {
        __typename
        id
        title
        text
      }
    }
  }
}
  `;


