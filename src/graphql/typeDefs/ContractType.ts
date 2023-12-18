const ContractType = `#graphql
    type ContractType {
        _id: ID
        title: String
    }
    type Contract {
        _id: ID
        contractTitle: String
        position: String
        startDate: Date
        endDate: Date
        status: Boolean
    }
    input ContactInput {
        contractTitle: ID
        employeeId: ID
        position: ID
        affair: ID
        office: ID
        section: ID
        startDate: Date
        endDate: Date
    }
    type Query {
        getContractsType:[ContractType]!
        getContracts(employeeId: ID):[Contract]!
    }
    type Mutation {
        createContractType(title: String!): Message!
        updateContractType(_id: ID!, title: String!): Message!
        deleteContractType(_id: ID!): Message!

        addContract(input: ContactInput!): Message!
        updateContractStatus(_id: ID!, status: Boolean!): Message!
        deleteContract(_id: ID!): Message!

    }
`;

export default ContractType
