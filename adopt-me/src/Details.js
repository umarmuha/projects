import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
// const Details = () => {
//   return <h1>Hi Lol</h1>;
// };

// We are going to details page using the class components

class Details extends React.Component {
  // class componenets MUST have render method. Render method works mostly like a functional component

  // Instead of writing the constructor below we can use the babel eslint conf
  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }
  state = { loading: true };

  componentDidMount() {
    // throw new Error("lol");
    // Anything that propogates from parent goes into this.props. Its immutable, read only by the child component
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading ....</h1>;
    }

    const { name, animal, location, description, breed, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {/* Using destrcuturing and only getting theme from [them, setTheme] hook */}
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
