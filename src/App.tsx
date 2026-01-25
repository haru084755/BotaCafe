import { Header } from "./components/organisms/Header"
import { Fv } from "./components/pages/Fv"

function App() {

  return (
    <body>
      <Header />

      <main>
        <div className="mt-20">
          <Fv />
        </div>
      </main>
    </body>
  )
}

export default App
