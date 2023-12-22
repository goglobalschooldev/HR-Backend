"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TrainingType = `#graphql
    type Training {
        _id: ID
        topic: String
        cover: String
        speakers: [String]
        date: Date
        start: String
        end: String
        venue: String
        description: String
        status: String
    }  
    type TrainingGuest {
        _id: ID
        firstName: String
        lastName: String
        gender: String
        position: String
        from: String
        tell: String
        email: String
        expectation: String
        trainingId: ID
        training: String
        valuation: [TrainingValuation]
        attendance: String
    } 
    type TrainingValuation {
        questionId: ID
        question: String
        answer: String
    }

    type TrainingPaginator{
		data: [Training]
		paginator: Paginator
	}
    type TrainingGuestPaginator{
		data: [TrainingGuest]
        total: Int
        female: Int
        evaluation: Int
		paginator: Paginator
	}
    type EvaluationTrainingByGuest{
        _id: ID
        question: String
        type: String
        anwser: String
    }
    enum AllowStatusGuestAttendance {
        L
        C
        A
        P
    }
    input createTrainingInput {
        topic: String
        cover: String
        speakers: [String]
        date: Date
        start: String
        end: String
        venue: String
        description: String
    }
    input trainingResgister {
        firstName: String
        lastName: String
        gender: String
        position: String
        from: String
        tell: String
        email: String
        expectation: String
        trainingId: ID
    }
    input valuationsInput {
        questionId: ID
        answer: String
    }
    type Query {
        getTrainingwithPagination(page: Int!, limit: Int!,keyword: String!, status: String!): TrainingPaginator!
        getTrainingById(_id: ID!): Training!
        getGuestRegisterwithPagination(page: Int!, limit: Int!,keyword: String!, trainingId: ID!,evaluation: Boolean!): TrainingGuestPaginator!
        getGeustLogin(trainingId: ID!, email: String!): ID!
        getEvaluationTrainingByGuest(guestId: ID!): [EvaluationTrainingByGuest]!
    }
    type Mutation {
        createTraining(input: createTrainingInput!): Message!
        updateTraining(_id: ID!, input: createTrainingInput!): Message!
        updateTrainingStatus(_id: ID!, status: String!): Message!
        deleteTraining(_id: ID!): Message!
        
        # Guest =========================================
        guestRegister(input: trainingResgister!): Message!
        guestValuationLoing(email: String!,trainingId: ID!): Message!
        updateGuestRegister(input: trainingResgister!): Message!
        deleteGuestRegister(_id: ID!): Message!
        guestValuation(email: String!,trainingId: ID!, input: [valuationsInput]!): Message!
        checkGuestAttendance(guestId: ID!,status: AllowStatusGuestAttendance! ): Message!
    }
`;
exports.default = TrainingType;
