import { MantineProvider } from '@mantine/core'
import './App.css'
import Layout from './components/layout/Layout'

function App() {
  return (
<MantineProvider defaultColorScheme="auto">
      <Layout>
        <h1>ciao sono Giorgia</h1>
      </Layout>
    </MantineProvider>
  )
}

export default App
