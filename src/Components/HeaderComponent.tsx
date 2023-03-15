import Logo from "../assets/UFC_Logo.svg";
export const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <div>
          <img id="logo" src={Logo} alt="failed to load" />
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>LOGIN</li>
        </ul>
      </nav>
    </header>
  );
};
