
import QuickActions from '../components/quickActions/QuickActions'
import SummaryCards from '../components/summaryCards/SummaryCards'
import UpcomingRenewals from '../components/upcomingRenewals/UpcomingRenewals'
import '../pages/Dashboard.css'

export default function Dashboard() {

  return (
    <>
      <header className='dashboard_header'>
        <h2>Dashboard</h2>
      </header>

      <div className='dashboard_maindiv'>

        <section>
          <SummaryCards></SummaryCards>
        </section>

        <section className='quick-Actions-section'>
          <QuickActions></QuickActions>
        </section>

        <section>
          <UpcomingRenewals></UpcomingRenewals>
        </section>

      </div>
    </>
  )
}
