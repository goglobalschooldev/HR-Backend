const AttendanceType = `#graphql
    type Attendance {
      _id: ID
      profileImage: String
      latinName: String
      date: Date
      morning: String
      afternoon: String
      attendances: AttendanceStatus
      fine: Float
      branch: String
      remark: String
    }
    type AttendanceStatus {
      morning: String
      afternoon: String
    }
    enum AllowShift {
        morning
        afternoon
      }
    enum AllowScanAction {
        checkIn
        checkOut
      }
    enum AllowAttendance {
      Presence
      Permission
      Absence
      Late
    }
    type AttendancePagination {
        data: [Attendance]
        paginator: Paginator
    }
    input AttendanceUpdateInput {
      attendanceId: ID
      shift: AllowShift
      attendance: AllowAttendance
      checkIn: String
      checkOut: String
      remark: String
    }
    type Query {
      getAttendancePagination(page: Int!, limit: Int!, keyword: String!, branchId: ID!,  date: String!): AttendancePagination!
      getEmployeeAttendance(employeeId: String!, from: String!, to: String!, limit: Int!): [Attendance]!
    }
    type Mutation {
        employeeCheckAttendance(longitude: String!, latitude: String!, shift: AllowShift!, scan: AllowScanAction!): Message!
        updateEmployeeAttendance(input: AttendanceUpdateInput!): Message!
    }
`;

export default AttendanceType;
