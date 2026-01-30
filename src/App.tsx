import { Header } from "./components/organisms/Header"
import { Concept } from "./components/pages/Concept"
import { Fv } from "./components/pages/Fv"
import "./index.css"

function App() {

  return (
    <body>
      <Header />

      <main>
        <div className="mt-20">
          <Fv />
        </div>

        <Concept />

      </main>
    </body>
  )
}

export default App
