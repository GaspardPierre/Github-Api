import React from "react";
import { Container, Card, Image } from "semantic-ui-react";
import "./RepoResult.css";

const src = "https://react.semantic-ui.com/images/avatar/large/daniel.jpg";

export default function RepoResult({repos}) {
  return (
    <>
      <Container className="cards_container">
      
        <div className="card-container"
       >
       {repos.map((repo) => (
          <Card className="custom-card"
           key={repo.id}
         >
            <Image src={repo.owner.avatar_url} />
            <Card.Content>
              <Card.Header>{repo.name}</Card.Header>
              <Card.Description>
              {repo.description}
              </Card.Description>
            </Card.Content>
          </Card>
          //  
          ))}
           </div>
        
        
     
      </Container>
    </>
  );
}
