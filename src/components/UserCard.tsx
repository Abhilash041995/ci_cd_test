import './UserCard.css'

type User = {
  id: string
  name: string
  email: string
  avatar: string
  status: string
}

export default function UserCard({ user }: { user: User }) {
  return (
    <article className="user-card">
      <img className="avatar" src={user.avatar} alt={`${user.name} avatar`} />

      <div className="user-info">
        <div className="user-name">{user.name}</div>
        <div className="user-email">{user.email}</div>
      </div>

      <div className="user-status">
        <span className={`status-dot ${user.status}`} aria-hidden></span>
        <span className="status-text">{user.status}</span>
      </div>
    </article>
  )
}
