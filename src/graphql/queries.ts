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
          responsiveImage(imgixParams: {fit: crop, w: "300", h: "300", auto: format}) {
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
      ... on CardareaRecord {
        __typename
        id
        cards {
          title
          description
          link
          image {
            responsiveImage(imgixParams: {fit: crop, auto: format}) {
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
}
  `;


