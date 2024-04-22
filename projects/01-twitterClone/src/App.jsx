import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
import './App.css'

const users= [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  }
]
export function App() {
  return (
    <section className="App">
     {
      users.map(({userName, name, isFollowing}) =>{
        return(
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })
     }

    </section>
  );
}
