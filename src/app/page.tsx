import { Suspense } from 'react'

import { GithubProfile } from './components/github-profile'
import { LongWaitComponent } from './components/long-wait-component'

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Suspense fallback={<p>Loading GitHubProfile</p>}>
        <GithubProfile />
      </Suspense>

      <Suspense fallback={<p>Loading Long Component</p>}>
        <LongWaitComponent />
      </Suspense>
    </div>
  )
}
