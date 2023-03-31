const mockedData = {
    generalData() {
        let user = {
            data: {
                "id": 13, "userInfos": { "firstName": "MockedUser", "lastName": "User", "age": 18 }, "todayScore": 0.6, "keyData": { "calorieCount": 2300, "proteinCount": 190, "carbohydrateCount": 190, "lipidCount": 110 }
            }
        }
        return user
    },
    performanceData() {
        let perf = {
            data: {
                "userId": 13,
                "kind": { 
                    "1": "cardio",//6
                     "2": "energy",//5
                      "3": "endurance",//4
                       "4": "strength",//3
                        "5": "speed",//2
                         "6": "intensity" },//1
                "data": [
                { "value": 90, "kind": 1 },
                { "value": 110, "kind": 2 },
                { "value": 130, "kind": 3 },
                { "value": 60, "kind": 4 },
                { "value": 190, "kind": 5 },
                { "value": 80, "kind": 6 }]
            }
        }
        return perf
    },
    activityData() {
        let activity = {
            data: {
                "userId": 13, "sessions": [
                    { "day": "2020-07-01", "kilogram": 68, "calories": 250 },
                    { "day": "2020-07-02", "kilogram": 67, "calories": 250 },
                    { "day": "2020-07-03", "kilogram": 65, "calories": 480 },
                    { "day": "2020-07-04", "kilogram": 70, "calories": 500 },
                    { "day": "2020-07-05", "kilogram": 68, "calories": 170 },
                    { "day": "2020-07-06", "kilogram": 69, "calories": 162 },
                    { "day": "2020-07-07", "kilogram": 69, "calories": 390 }]
            }
        }
        return activity
    },
    sessionsData() {
        let session = {
            data: {
                "userId": 13, 
                "sessions": 
                [{ "day": 1, "sessionLength": 45 }, 
                { "day": 2, "sessionLength": 30 }, 
                { "day": 3, "sessionLength": 25 }, 
                { "day": 4, "sessionLength": 50 }, 
                { "day": 5, "sessionLength": 60 }, 
                { "day": 6, "sessionLength": 12 }, 
                { "day": 7, "sessionLength": 40 }]
            }
        }
        return session
    }

}

export default {
    data() {
        return mockedData
    },
}

