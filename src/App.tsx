import './App.css'
import './UserGrid.css'
import UserCard from './components/UserCard'

const users = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    avatar: 'https://avatars.dicebear.com/api/identicon/alice-johnson.svg',
    status: 'online',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    avatar: 'https://avatars.dicebear.com/api/identicon/bob-smith.svg',
    status: 'away',
  },
  {
    id: '3',
    name: 'Carla Gomez',
    email: 'carla.gomez@example.com',
    avatar: 'https://avatars.dicebear.com/api/identicon/carla-gomez.svg',
    status: 'busy',
  },
  {
    id: '4',
    name: 'Dan Lee ',
    email: 'dan.lee@example.com',
    avatar: 'https://avatars.dicebear.com/api/identicon/dan-lee.svg',
    status: 'offline',
  },
]

function App() {
  return (
    <div className="app-root">
      <header>
        <h1>Users</h1>
        <p className="subtitle">Cards with name, email, avatar and status</p>
      </header>

      <section className="user-grid">
        {users.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </section>
    </div>
  )
}

export default App
