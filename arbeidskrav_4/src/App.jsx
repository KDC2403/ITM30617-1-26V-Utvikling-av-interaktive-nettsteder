import './styles/global.css'

import Header from './components/Header'
import PersonOne from './components/profiles/Profile1'
import AssignmentList from './components/AssignmentList'

function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h2>Gruppemedlemmer</h2>

          <PersonOne />
          <PersonTwo />
        </section>

        <section>
          <h2>Arbeidskrav</h2>

          <AssignmentList />
        </section>
      </main>
    </>
  )
}

export default App