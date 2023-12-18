const BranchType = `#graphql
    type Branch {
        _id: ID
        branchName: String
        longitude: String
        latitude: String
    }

    type Affair {
        _id: ID
        affairName: String
    }

    type Office {
        _id: ID
        officeName: String
    }

    type Section {
        _id: ID
        sectionName: String
        createdAt: Date
    }
    type Position {
        _id: ID
        position: String
    }
    type PositionPagination {
        data: [Position]
        paginator: Paginator
    }
    type PublicHoliday {
        _id: ID
        publicHoliday: String
        remark: String
    }
    type Query {
        # Branch
        getBranchs(keyword: String!):[Branch]!
     
        # Affair
        getAffairs(keyword: String!):[Affair]!
       
        # Office
        getOffices(keyword: String!):[Office]!

        # Section
        getSections(keyword: String!):[Section]!

        # Position
        getPositionsPagination(page: Int!, limit: Int!, keyword: String!): PositionPagination!

        # PublicHoliday
        getPublicHolidays: [PublicHoliday]!
    }
    type Mutation {
        # Branch
        createBranch(branchName: String!, longitude: String!, latitude: String!):Message!
        updateBranch(_id: ID!, branchName: String!, longitude: String!, latitude: String!):Message!
        deleteBranch(_id: ID!):Message!

        # Affair
        createAffair(affairName: String!):Message!
        updateAffair(_id: ID!, affairName: String!):Message!
        deleteAffair(_id: ID!):Message!

        # Office
        createOffice(officeName: String!):Message!
        updateOffice(_id: ID!, officeName: String!):Message!
        deleteOffice(_id: ID!):Message!

        # Section
        createSection(sectionName: String!):Message!
        updateSection(_id: ID!, sectionName: String!):Message!
        deleteSection(_id: ID!):Message!

        # Position
        createPosition(position: String!):Message!
        updatePosition(_id: ID!, position: String!):Message!
        deletePosition(_id: ID!): Message!

        # Public Holiday
        createPublicHoliday(publicHoliday: String!, remark: String!): Message!
        updatePublicHoliday(_id: ID!, publicHoliday: String!, remark: String!): Message!
        deletePublicHoliday(_id: ID!): Message!
    }
`;

export default BranchType
