export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container-custom">
        <ul className="flex items-center justify-around text-2xl font-karla font-light tracking-wide h-16 md:h-20">
          <li><a href="#concept">CONCEPT</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#information">INFOMATION</a></li>
          <li><a href="#access">ACCESS</a></li>
        </ul>
      </nav>
    </header>
  )
}