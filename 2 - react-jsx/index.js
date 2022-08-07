/*
    Challenge - Create a NavBar using JSX
        - Use the semantic `nav` element as the parent wrapper
        - Have an h1 element with the brand name of your 'website'
        - Insert ans unordered list for the other nav elements
            - Inside the `ul`, have three `li`s for "Pricing", "About" and "Contact"
        - Don't worry abous styling yet - it'll just be plain-looking HTML for now
*/

const NavBar = () => {
    return (
        <nav>
            <h1>This is JSX</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

ReactDOM.render(<NavBar/>, document.querySelector('div#root'))