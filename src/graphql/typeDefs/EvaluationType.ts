const EvaluationType = `#graphql
    type EmployeeEvaluation {
        _id: ID
        date: Date
        type: String
         evaluationBy: String
        evaluationBySrc: String
        evaluationByPosition: String
        evaluationScore: [EvaluationDeteil]
        evaluationChoice: [EvaluationChoice]
        overallAverage: Float
        overallScore: String
    }
  
    enum AllowEvaluationType {
        Score
        Choice
    }
    type EvaluationChoice {
        _id: ID
        title: String
        value: String
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
        evaluationType: AllowEvaluationType
        evaluations:[String]
    }
 
   input EvaluationInput {
    type: String
    employeeId: ID
    evaluations: [EvaluationDeteilInput]
   }
   input EvaluationDeteilInput {
        title: ID
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
        createEvaluation(title: String, evaluations: [String]!, evaluationType: AllowEvaluationType!): Message!
        updateEvaluation(_id: String, title: String, evaluations: [String]!,evaluationType: AllowEvaluationType!): Message!
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
