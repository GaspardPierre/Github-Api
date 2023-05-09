import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {  Message } from 'semantic-ui-react';

interface Props {
  reposNumber: number;
}

const MessageResult: FunctionComponent<Props> = ({ reposNumber }: Props) => {
  const repos = useSelector((state: RootState) => state.repos.repos);
  return (
    repos.length === 0 ? null : (
      <div className='message_container'>
        <Message
          header="Résultat de la recherche"
          content={`La recherche a donné ${reposNumber} résultats.`}
          className='message'
        />
      </div>
    )
  );
};

export default MessageResult;
