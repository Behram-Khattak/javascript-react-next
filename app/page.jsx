import LikeButton from "./components/LikeButton";

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

// nesting header component inside the homepage component
export default function HomePage() {
  const subjects = ["Math", "Science", "History"];

  // parent component
  return (
    <div>
      <Header title="this is title" />
      <Subjects subjects={subjects} />
      <Description description="This is the homepage of our React application." />
      <LikeButton />
    </div>
  );
}
