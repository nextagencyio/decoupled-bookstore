// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_BOOK_TEASERS = gql`
  query GetBookTeasers($first: Int = 10) {
    nodeBooks(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeBook {
          body {
            processed
            summary
          }
          author
          genre
          price
          isbn
          image {
            url
            alt
            width
            height
          }
          staffFavorite
        }
      }
    }
  }
`

// Alias for demo mode compatibility
export const GET_ARTICLE_TEASERS = GET_BOOK_TEASERS

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        featuresItems {
          ... on ParagraphFeatureItem {
            id
            title
            description {
              processed
            }
            icon
          }
        }
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeBook {
            id
            title
            body {
              processed
            }
            author
            genre
            price
            isbn
            image {
              url
              alt
              width
              height
            }
            staffFavorite
            created {
              timestamp
            }
            changed {
              timestamp
            }
          }
          ... on NodeEvent {
            id
            title
            body {
              processed
            }
            eventDate {
              timestamp
            }
            location
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeStaffPick {
            id
            title
            body {
              processed
            }
            bookTitle
            reviewerName
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description {
                  processed
                }
                icon
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query GetEvents($first: Int = 10) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeEvent {
          body { processed summary }
          eventDate { timestamp }
          location
          image { url alt width height }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body { processed summary }
            eventDate { timestamp }
            location
            image { url alt width height }
          }
        }
      }
    }
  }
`

export const GET_STAFF_PICKS = gql`
  query GetStaffPicks($first: Int = 10) {
    nodeStaffPicks(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeStaffPick {
          body { processed summary }
          bookTitle
          reviewerName
          image { url alt width height }
        }
      }
    }
  }
`

export const GET_STAFF_PICK_BY_PATH = gql`
  query GetStaffPickByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeStaffPick {
            id
            title
            path
            body { processed summary }
            bookTitle
            reviewerName
            image { url alt width height }
          }
        }
      }
    }
  }
`
