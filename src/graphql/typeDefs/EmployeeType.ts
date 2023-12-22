const EmployeeType = `#graphql
    type Employee  {
        _id: ID
        nationalId: String
        employeeId: String
        firstName: String
        lastName: String
        latinName: String
        gender: String
        profileImage: String
        joinDate: Date
        dob: Date
        workingStatus: String
        placeOfBirth: String
        nationality: String
        tell: String
        email: String
        currentAddress: String
        branch: String
        branchId: ID
        marital: String
        workBook: Boolean
    }
    type EmployeeSelect {
        _id: ID
        latinName: String
        profileImage: String
    }
    type EmployeeInfo {
        _id: ID
        latinName: String
        firstName: String
        lastName: String
        profileImage: String
        email: String
    }
    type EmployeeWarning {
        _id: ID
        date: String
        description: String
        resolution: String
        result: String
        remark: String
    }
    type WrokingTime {
        _id: ID
        shiftName: String
        start: String
        end: String
    }
    input CreateEmployeeInput {
        nationalId: String
        employeeId: String
        firstName: String
        lastName: String
        latinName: String
        gender: String
        profileImage: String
        joinDate: Date
        dob: Date
        placeOfBirth: String
        nationality: String
        tell: String
        email: String
        currentAddress: String
        branch: String
        marital: String
        workBook: Boolean
    }
    input EmployeeWarningInput {
        employeeId: ID
        date: String
        description: String
        resolution: String
        result: String
        remark: String
    }
    type EmployeePagination {
        data: [Employee]
        paginator: Paginator
    }
    type PublicHolidayByEmployee {
        _id: ID
        title: String
        titleId: ID
        totalDay: Float
        year: String
        status: Boolean
    }
 
    type Query {
        getEmployeesPagination(page: Int!, limit: Int!, keyword: String!, workingStatus: String!): EmployeePagination!
        getEmployeeWorkingTime(employeeId: ID!): [WrokingTime]!
        getEmployeeById(_id: ID!): Employee!
        getEmployeeWarning(employeeId: ID!): [EmployeeWarning]!
        getPublicHolidayByEmployee(employeeId: ID!): [PublicHolidayByEmployee]!

        getEmployeeInfo(employeeId: ID!): EmployeeInfo!
        getEmployeesForSelect: [EmployeeSelect]!
        getEmployeesForUserPagination(page: Int!, limit: Int!, keyword: String!, _id: [String]): EmployeePagination!
    }
    type Mutation {
        createEmployee(input: CreateEmployeeInput!): Message!
        updateEmployee(_id: ID!, input: CreateEmployeeInput!): Message!
        deleteEmployee(_id: ID!): Message!
        updateWorkingStatus(_id: ID!, workingStatus: String!): Message!
        
        addEmployeeWorkingTime(employeeId: ID!, shiftName: String!, start: String!, end: String!): Message!
        updateEmployeeWorkingTime(_id: ID!, employeeId: ID!, shiftName: String!, start: String!, end: String!): Message!
        deleteEmployeeWorkingTime(_id: ID!): Message!

        createEmployeeWarning(input: EmployeeWarningInput!): Message!
        updateEmployeeWarning(_id: ID!, input: EmployeeWarningInput!): Message!
        deleteEmployeeWarning(_id: ID!): Message!

        addPublicHolidayByEmployee(employeeId: ID!, title: ID!, totalDay: Float! year: String!): Message!
        updatePublicHolidayByEmployee(_id: ID!, title: ID!, totalDay: Float! year: String!): Message!
        deletePublicHolidayByEmployee(_id: ID!): Message!
        updatePublicHolidayStatus(_id: ID!, status: Boolean): Message!
    }
`;

export default EmployeeType
