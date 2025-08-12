import { Person } from "./Person";
import PropTypes from "prop-types";

// array for items
export const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        // const {name,age}= person;
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
List.propTypes = {
  people: PropTypes.array.isRequired, // array type, required prop
};