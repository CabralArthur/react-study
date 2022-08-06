// const MainComponent = () => {
//     return (
//         <h1>"I'm learning React!"</h1>
//     )
// };


// ReactDOM.render(<MainComponent/>, document.getElementById("root"));

/*
    Challenge - recreate the above line of code in vanilla JS creating and
    appending an h1 to our div #root

    - Create an new h1 element [OK]
    - Give it some textContext [OK]
    - Give it a class name of "header" [OK]
    - Append it as a child of the div#root [OK]
*/

const h1 = document.createElement('h1');

h1.innerText = "I'm learning React!";

h1.classList.add('header');

const root = document.querySelector('div#root');

root.appendChild(h1);