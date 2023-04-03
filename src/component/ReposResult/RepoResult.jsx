import React from "react";
import { Container, Card, Image } from "semantic-ui-react";
import "./RepoResult.css";

const src = "https://react.semantic-ui.com/images/avatar/large/daniel.jpg";

export default function RepoResult() {
  return (
    <>
      <Container className="cards_container">
        <div className="card-container">
        <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          <div className="card-wrapper">
          <Card className="custom-card">
            <Image src={src} />
            <Card.Content>
              <Card.Header>Titre 1</Card.Header>
              <Card.Description>
                Ceci est une description pour la première carte.
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
          </div>
     
      </Container>
    </>
  );
}
