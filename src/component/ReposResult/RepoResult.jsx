import { React, useState } from "react";
import { Container, Card, Image, Button } from "semantic-ui-react";
import "./RepoResult.css";

const src = "https://react.semantic-ui.com/images/avatar/large/daniel.jpg";

export default function RepoResult({ repos }) {
  const [reposNumber, setReposNumber] = useState(8);
  const [showMore, setShowMore] = useState(true);
  const [showLessButton, setShowLessButton] = useState(false);

  const handleShoMore = () => {
    setReposNumber(reposNumber + 8);
    setShowLessButton(true);
  };
  const handleShowLess = () => {
    setReposNumber(reposNumber-8);
    setShowLessButton(false);
  };
  return (
    <>
      <Container className="cards_container">
        <div className="card-container">
          {repos.slice(0, reposNumber).map((repo) => (
            <Card className="custom-card" key={repo.id}>
              <Image src={repo.owner.avatar_url} />
              <Card.Content>
                <Card.Header>{repo.name}</Card.Header>
                <Card.Description>{repo.description}</Card.Description>
              </Card.Content>
            </Card>
            //
          ))}
        </div>
        <div className="button-container">
          {reposNumber < repos.length && (
            <Button onClick={handleShoMore}>Afficher plus</Button>
          )}
          {showLessButton && (
            <Button onClick={handleShowLess}>Afficher moins</Button>
          )}
        </div>
      </Container>
    </>
  );
}
