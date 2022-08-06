// => Create a custom React Component
// => Call it "MainContent"
// => This component should return a simple h1 element that says "I'm learning React"
// => Put this component bellow the Navbar

const NavBar = () => {
    return (
        <h1>My NavBar</h1>
    );
};

const MainComponent = () => {
    return (
        <h1>"I'm learning React!"</h1>
    )
};

const Wrapper = () => {
    return (
        <>
            <NavBar/>
            <MainComponent/>
        </>
    )
}

ReactDOM.render(<Wrapper/>, document.getElementById("root"))