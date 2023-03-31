import { useEffect, useState } from 'react'
import Header from '../components/header/header.jsx'
import Navbar from '../components/navbar/navbar.jsx'
import Title from '../components/title/title.jsx'
import Card from '../components/card/card.jsx'
import RadarGraph from '../components/chart/radarGraph/radarGraph.jsx'
import ActivityBarChart from '../components/chart/activityBarChart/activityBarChart.jsx'
import calorie from '../assets/calories-icon.svg'
import protein from '../assets/protein-icon.svg'
import fat from '../assets/fat-icon.svg'
import carbs from '../assets/carbs-icon.svg'
import styles from './styles/dashboard.module.scss'
import getData from '../data/getData.js'
import { useParams } from 'react-router'
import Session from '../components/chart/session/session.jsx'
import PieChartUser from '../components/chart/piechart/piechart.jsx'
import Spinner from '../components/spinner/spinner.jsx'

function Dashboard() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getData(id)
      .then(user => {
        setUser(user)
        setTimeout(() => setLoading(false), 1000)//Le loader s'affichera au moins une secondes
      })
  }, [])
  return (
    <div className={styles.dashboard}>
      {loading && <Spinner />}
      {
        !loading && user.general && user.activity && user.sessions && user.perf &&
        <>
          <Header />
          <Navbar />
          <main className={styles.main}>
            <Title name={user && user.getName().name.firstName}></Title>
            <div className={styles.container}>
              <div className={styles.graphContain}>
                <ActivityBarChart data={user && user.getActivityData()} />
                <div className={styles.charts}>
                  <Session data={user && user.getSessionData()} />
                  <RadarGraph data={user && user.getRadarData()} />
                  <PieChartUser data={user && user.getTargetDataForPieChart()} />
                </div>
              </div>
              <div className={styles.cardsContain}>
                <Card image={calorie} type="Calories" data={user && user.getNutriment().calorieCount + "kCal"}></Card>
                <Card image={protein} type="Proteines" data={user && user.getNutriment().proteinCount + "g"} ></Card>
                <Card image={carbs} type="Glucides" data={user && user.getNutriment().carbohydrateCount + "g"}></Card>
                <Card image={fat} type="Lipides" data={user && user.getNutriment().lipidCount + "g"}></Card>
              </div>
            </div>
          </main>
        </>
      }
      {!loading && !user.general && <p className={styles.error}>Erreur de récupération de données</p>}

    </div>
  )
}

export default Dashboard
