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

export const PROJECTSPAGE_QUERY = `
query ProjectPage {
  projectPage {
    title
    slug
    content {
      ... on HeaderRecord {
        __typename
        id
        title
        subtitle
      }
      ... on TextRecord {
        __typename
        id
        text
      }
      ... on BannerRecord {
        __typename
        id
        title
        description
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
      ... on CardareaRecord {
        __typename
        id
        cards {
          title
          description
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
          link {
            ... on ProjectRecord {
              id
              slug
            }
            ... on ProjectPageRecord {
              id
              slug
            }
            ... on HomeRecord {
              id
              slug
            }
            ... on AboutRecord {
              id
              slug
            }
          }
        }
      }
    }
  }
}
`;

export const PROJECT_QUERY = `
query Project($slug: String) {
  project(filter: {slug: {eq: $slug}}) {
    title
    slug
    content {
      ... on HeaderRecord {
        __typename
        id
        title
        subtitle
      }
      ... on TextRecord {
        __typename
        id
        text
      }
      ... on BannerRecord {
        __typename
        id
        title
        description
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
`