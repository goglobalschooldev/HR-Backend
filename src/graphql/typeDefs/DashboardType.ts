const GlobalType = `#graphql
    type DashboardInfo {
        totalEmployee: Int
        totalResign: Int
        todayLate: Float
        todayPermision: Float
    }
    type Query {
       getDashboardInfo: DashboardInfo! 
    }
`;

export default GlobalType
