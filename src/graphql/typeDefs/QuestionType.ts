const questionType = `#graphql
     type Question {
        _id: ID
        question: String
        type: String
        multiple: [String]
        singular: String
    }
    enum AllowType {
            All
            multiple
            singular
        }
    type Query {
        getQuestions(keyword: String!,type: String!): [Question]!
        getQuestionsByTraining(trainingId: ID!): [Question]!
    }
    type Mutation{
        createQuestion(question: String, type: String, multiple: [String]): Message!
        updateQuestion(_id: String, question: String, type: String, multiple: [String]): Message!
        deleteQuestion(_id: String): Message!
        addTrainingQuestion(trainingId: ID!, questions:[ID]!): Message!
    }
`;

export default questionType;
