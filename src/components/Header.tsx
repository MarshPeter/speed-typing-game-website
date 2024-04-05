export default function Header() {
  return (
    <header className="flex justify-center bg-indigo-900 p-3 text-4xl text-gray-100">
      <div className="w-10/12 flex justify-between">
        <div>
          <p>SpeedTypers</p>
        </div>
        <div>
          <nav className="flex gap-4">
            <a href="">Home</a>
            <a href="">Race</a>
            <a href=""></a>
          </nav>
        </div>
      </div>
    </header>
  )
}