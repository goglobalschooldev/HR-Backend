const EvaluationType = `#graphql
    type EmployeeEvaluation {
        _id: ID
        date: Date
        type: String
        employeeId: ID
        evaluations: [EvaluationDeteil]
        overallAverage: Float
        evaluationBy: String
        evaluationBySrc: String
        evaluationByPosition: String
        overallScore: [OverallStatus]
        commentsBy: [EvaluationComment]
    }
    type OverallStatus {
        overall: String
        overallStatus: Boolean
    }
    type EvaluationDeteil {
        _id: ID
        title: String
        value:[EvaluationValue]
    }
    type EvaluationComment {
        _id: ID
        text: String
        userName: String
        userSrc: String
        date: Date
    }
    type EvaluationValue {
        evaluation: String
        point: Int
    }
    type Evaluation {
        _id: ID
        title: String
        evaluations:[String]
    }
 
   input EvaluationInput {
    type: String
    employeeId: ID
    evaluations: [EvaluationDeteilInput]
   }
   input EvaluationDeteilInput {
        title: String
        value:[EvaluationValueInput]
    }
    input EvaluationValueInput {
        evaluation: String
        point: Int
    }
    type EvaluationScore{
        _id: ID
        evaluation: String
        score: Int
    }
    type Query {
        getEvaluations(keyword: String!): [Evaluation]!
        getEvaluationByEmployee(employeeId: ID):[EmployeeEvaluation]!
        getHeadCommentsEvaluation(evaluationId: ID!): [EvaluationComment]!
        getEvaluationScore:[EvaluationScore]!
    }
    type Mutation {
        createEvaluation(title: String, evaluations: [String]!): Message!
        updateEvaluation(_id: String, title: String, evaluations: [String]!): Message!
        deleteEvaluation(_id: String): Message!

        # Evaluation Employee
        employeeEvaluation(input: EvaluationInput!): Message!
        editEmployeeEvaluation(_id: ID!, input: EvaluationInput!): Message!
        deleteEmployeeEvaluation(_id: ID!): Message!
        headCommentEvaluation(_id: ID!, text: String!): Message!
        removeHeadCommentEvaluation(_id: ID!, commentId: ID!): Message! 

        # EvaluationScore
        createEvaluationScore(evaluation: String!, score: Int!): Message!
        updateEvaluationScore(_id: ID!, evaluation: String!, score: Int!): Message!
        deleteEvaluationScore(_id: ID!): Message!
    }
`;

export default EvaluationType
