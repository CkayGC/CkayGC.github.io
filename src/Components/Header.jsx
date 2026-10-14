import './Header.css';

function Header() {
    return (
    <header className="App-header">

        <h1>
            <span id="FirstName">Celvin</span>
            {' '}
            <span id="LastName">Knudsen</span>
        </h1>

        <h2 id="title1">
            <span id="title1-span1">Full</span> 
            {' '}
            <span id="title1-span2">Stack</span> 
            {' '}
            <span id="title1-span3">Developer</span>
        </h2>

        <h2 id="title2">
            <span id="title2-span1">Software</span> 
            {' '}
            <span id="title2-span2">Engineer</span>
        </h2>


    </header>
    );
}

export default Header;