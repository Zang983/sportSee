/**
 * This class contain many methods to format user's datas.
 */
export default class User {
    constructor(data) {
        this.general = data.generalData
        this.activity = data.activityData
        this.sessions = data.sessionsData
        this.perf = data.performanceData
    }

/**
 * @returns {[Object]} activity data (kilogram & calories for each activity)
 */
    getActivityData() {
        let activity = this.activity.data.sessions
        let data = []
        for (let i = 0; i < activity.length; i++) {
            let donnee = {
                index: i + 1,
                kilogram: activity[i].kilogram,
                calories: activity[i].calories
            }
            data.push(donnee)
        }
        return data
    }

/**
 * @returns {Object} nutriment's informations (type and quantity)
 */
    getNutriment() {
        let data = { ...this.general.data.keyData }
        for (let value in data) {
            data[value] = new Intl.NumberFormat('en-US').format(data[value])
        }
        console.log(data)
        return data
    }
/**
 * 
 * @returns {string} username
 */
    getName() {
        let name = {
            firstName: this.general.data.userInfos.firstName,
            lastName: this.general.data.userInfos.lastName
        }
        return { name }
    }

    /**
     * This function compiled data for radar graph
     * ----------- WARNING -----------
     * To make this function more flexible, translations of categories should be done on a switch.
     * If original order change, so this function will be brooken
     * ---------- END -----------  
     * @returns {[Object]} formatted data for recharts check https://recharts.org/en-US/api/RadarChart
     */
    getRadarData() {
        let data = this.perf.data.data
        let kind = this.perf.data.kind
        let result = []
        let traduction = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]
        for (let category in kind) {
            for (let entry of data) {
                if (entry.kind.toString() === category) {
                    let newEntry = {
                        subject: traduction[entry.kind - 1],//To translate in french but WARNING
                        value: entry.value,
                        kind: entry.kind
                    }
                    result.push(newEntry)
                }
            }
        }
        result.sort((a, b) => b.kind - a.kind
        )
        return result
    }

    /**
     * This function compiled data for session graph
     * ----------- WARNING -----------
     * To make this function more flexible, translations of day should be done on a switch.
     * If original order or format change, so this function will be brooken
     * ---------- END -----------  
     * @returns {[Object]} formatted data for recharts check https://recharts.org/en-US/api/LineChart 
     */
    getSessionData() {
        let sessions = this.sessions.data.sessions
        let result = []
        let convert = ["L", "M", "M", "J", "V", "S", "D"]
        for (let session of sessions) {
            result.push({
                day: convert[session.day - 1],//translation number to letter
                min: session.sessionLength
            })
        }
        return result
    }

    /** 
    * @returns {[Object]} formatted data for recharts check https://recharts.org/en-US/api/PieChart
    */
    getTargetDataForPieChart() {
        let score = 0
        this.general.data.todayScore ? score = parseFloat(this.general.data.todayScore, 10) * 100 : score = parseFloat(this.general.data.score, 10) * 100
        let scoreRef = 100 - score
        return new Array({ name: 'score', value: score }, { name: 'scoreRef', value: scoreRef })
    }
    /**
     * This function isn't used in actual version of app
     * @returns formatted data for recharts check https://recharts.org/en-US/api/RadialBarChart
     */
    getTargetDataForRadialChart() {
        if (this.general.data.todayScore)
            return new Array({ name: 'score', value: this.general.data.todayScore })
        else
            return new Array({ name: 'score', value: this.general.data.score })
    }

}