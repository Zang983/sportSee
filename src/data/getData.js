import mockedData from './mockedData.js'
import User from '../object/user.js'

/**
 * 
 * @param {string} id 
 * @returns object User with user's datas
 */
export default async function getData(id) {
    let generalData = null, activityData = null, sessionsData = null, performanceData = null
    if (id === "mocked") {
        generalData = mockedData.data().generalData()
        activityData = mockedData.data().activityData()
        sessionsData = mockedData.data().sessionsData()
        performanceData = mockedData.data().performanceData()
    }
    else {
        let host = "http://localhost:3000/"
        generalData = await fetch(host + `user/${id}`)
            .then((res) => {
                if (res.ok) return res.json()
            }).then(data => { return data })
            .catch(error => console.error("Problème de récupération des données, erreur :" + error))
        activityData = await fetch(host + `user/${id}/activity`)
            .then((res) => {
                if (res.ok) return res.json()
            }).then(data => { return data })
            .catch(error => console.error("Problème de récupération des données, erreur :" + error))
        sessionsData = await fetch(host + `user/${id}/average-sessions`)
            .then((res) => {
                if (res.ok) return res.json()
            }).then(data => { return data })
            .catch(error => console.error("Problème de récupération des données, erreur :" + error))
        performanceData = await fetch(host + `user/${id}/performance`)
            .then((res) => {
                if (res.ok) return res.json()
            }).then(data => { return data })
            .catch(error => console.log("Problème de récupération des données, erreur :" + error))

    }
    return new User({ generalData, activityData, sessionsData, performanceData })

}