import React, { FunctionComponent, useState } from "react";
import { Container, Card, Image, Button } from "semantic-ui-react";
import MessageResult from "../MessageResult/MessageResult";
import { Repo } from "../../types/type";
import "./RepoResult.css";

interface RepoResultProps {
  repos: Repo[];
};

const RepoResult : FunctionComponent< RepoResultProps> = ({ repos } : RepoResultProps)=> {
  const [reposNumber, setReposNumber] = useState<number>(8);
  const [showMore, setShowMore] = useState<boolean>(true);
  const [showLessButton, setShowLessButton] = useState<boolean>(false);

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
       <MessageResult 
    reposNumber={repos.length}
    />
      
        <div className="card-container">
          {repos.slice(0, reposNumber).map((repo) => (
            <Card className="custom-card" key={repo.id}
            href={repo.html_url}>
             
              <Image src={repo.owner.avatar_url}/>
          
              <Card.Content>
              {/* <Link to={repo.html_url}> */}
                <Card.Header>{repo.name}</Card.Header>
                <Card.Description>{repo.description}</Card.Description>
                {/* </Link> */}
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
export default RepoResult;