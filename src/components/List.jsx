import Person from "./Person";
const List = ({ people, removeUser }) => {
  return (
    <div>
      {people &&
        people.map((person) => {
          return <Person key={person.id} removeUser={removeUser} {...person} />;
        })}
    </div>
  );
};
export default List;
