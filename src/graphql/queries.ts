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
        buttons {
          title
          colour {
            cssRgb
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
      ... on ButtonRecord {
        __typename
        id
        colour {
          cssRgb
        }
        link {
          ... on AboutRecord {
            id
            slug
          }
          ... on HomeRecord {
            id
            slug
          }
          ... on ProjectPageRecord {
            id
            slug
          }
          ... on ProjectRecord {
            id
            slug
          }
          ... on UniversityRecord {
            id
            slug
          }
        }
        title
        colour {
          cssRgb
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
export const UNIVERSITY_QUERY = `
query University {
  university {
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
      ... on CardareaRecord {
        __typename
        id
        cards {
          title
          description
          link
          image {
            responsiveImage(imgixParams: {fit: crop, w: "1250", h: "1250", auto: format}) {
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

export const ABOUT_QUERY = `
query About {
  about {
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
        buttons {
          title
          colour {
            cssRgb
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