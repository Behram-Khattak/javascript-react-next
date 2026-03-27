// the main entry point of out application
const app = document.getElementById("app");

// created react root element
const root = ReactDOM.createRoot(app);

// a validation method
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return "Default title";
  }
}

// child component
// {
//    title: 'Welcome to the HomePage!'
//   description: 'This is the homepage of our React application.'
//}
// child component for header
function Header(props) {
  return (
    <div>
      <h1>{props.title ? props.title : "Default title"}</h1>
    </div>
  );
}

// another child component for description
function Description(props) {
  return <p>{props.description}</p>;
}

// child component for subjects list
function Subjects(props) {
  return (
    <ul>
      {props.subjects.map((subject) => (
        <li key={subject}>{subject}</li>
      ))}
    </ul>
  );
}

// function handleClick(setLikes, likes) {
//   setLikes(likes + 1);
// }

// another child component for button
// function Button(props) {
//   return (
//     <button type={props.type}>
//       {props.name}
//     </button>
//   );
// }

// nesting header component inside the homepage component
function HomePage() {
  const subjects = ["Math", "Science", "History"];
  // react use state hook
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  // parent component
  return (
    <div>
      <Header title="this is title" />
      <Subjects subjects={subjects} />
      <Description description="This is the homepage of our React application." />
      <button type="button" onClick={handleClick}>
        Likes {likes}
      </button>
    </div>
  );
}

root.render(<HomePage />);
