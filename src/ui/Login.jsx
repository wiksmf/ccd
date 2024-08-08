import './Login.css'

function Login() {
  return (
    <form id="login" className="form">
      <label className="label">
        <span className="span">Email</span>
        <input type="email" className="input" required />
      </label>

      <label className="label">
        <span className="span">Password</span>
        <input type="password" className="input" required />
      </label>

      <button type="button" className="btn">Login</button>
    </form>
  )
}

export default Login
