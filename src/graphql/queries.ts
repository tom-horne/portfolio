export const HOME_QUERY = `
query Home {
  home {
    content {
      ... on TextRecord {
        __typename
        id
        text
      }
      ... on HeaderRecord {
        __typename
        id
        title
        subtitle
      }
      ... on BannerRecord {
        __typename
        id
        title
        description
        image {
          responsiveImage(imgixParams: {fit: crop, w: "500", h: "500", auto: format}) {
            sizes
            src
            width
            height
            alt
            title
            base64
          }
        }
      }
    }
  }
}
  `;


