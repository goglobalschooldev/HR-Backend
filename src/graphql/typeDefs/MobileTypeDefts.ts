const MobileTypeDefts = `#graphql
    type UserInfoMobile{
        profileImage: String
        latinName: String
        position: String
    }
    type EmployeeOnHoliday {
        _id: ID
        profileImage: String
        latinName: String
        timeOff: String
        reason: String
        dateLeave: String
    }
    type EmployeeLeaveInfo {
        al: Float
        permission: Float
        late: Float
        fine: Float
    }
    type ForgortPassWord {
        status: Boolean
        title: String
        description: String
    }
    type  LeaveListForMobile{
        _id: ID
        description: String
        date: Date
        shife: String
        status: String
    }
    type  Notification {
        _id: ID
        title: String
        date: Date
        time: String
        body: String
    }
    type Query {
        getNotifications(limit: Int!):[Notification]!
        getEmployeeLeaveInfo(employeeId:ID!): EmployeeLeaveInfo!
        getAttendanceMobile(limit: Int!): [Attendance]!
        getUserInfoMobile: UserInfoMobile!
        getEmployeeOnHoliday: [EmployeeOnHoliday]
        forgortUserPassword(email: String!): ForgortPassWord!
        getLeaveListForMobile(limit: Int!):[LeaveListForMobile]!
    }
`;

export default MobileTypeDefts
