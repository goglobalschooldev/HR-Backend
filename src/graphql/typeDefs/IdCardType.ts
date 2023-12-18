const IdCardType = `#graphql
    type IdCard {
        profileImage: String
        firstName: String
        lastName: String
        latinName: String
        position: String
        QRCode: ID
    }
  
    type Query {
        getEmployeeIdCard(employeeId: ID!): IdCard!
    }
    type Mutation {
        generateEmployeeQRCode(employeeId: ID!): Message!
    }
`;

export default IdCardType;