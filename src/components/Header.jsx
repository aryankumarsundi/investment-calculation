import logo from '../assets/logo.png';
export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="logo" />
            <h1>React Investment Calculator</h1>
        </header>
    );
}