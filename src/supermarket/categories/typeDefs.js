export const categoryTypeDef = `
  type Report {
      id: Int!
      date: String!
      routeid: Int!
      type: Boolean!
      duration: Float!
  }
  input ReportInput {
      date: String!
      routeid: Int!
      type: Boolean!
  }`;

export const categoryQueries = `
      allReports: [Report]!
      reportById(id: Int!): Report!
         
  `;

export const categoryMutations = `
    createReport(Report: ReportInput!): Report!
    updateReport(id: Int!, Report: ReportInput!): Report!
    deleteReport(id: Int!): Int
`;
