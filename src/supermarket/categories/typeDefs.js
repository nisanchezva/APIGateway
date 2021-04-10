export const categoryTypeDef = `
  type Report {
      id: Int!
      date: String!
      routeid: Integer!
      type: Boolean!
  }
  input ReportInput {
      date: String!
      routeid: Integer!
      type: Boolean!
  }`;

export const categoryQueries = `
      allReports: [Report]!

  `;

export const categoryMutations = `
    createReport(report: ReportInput!): Report!
`;
