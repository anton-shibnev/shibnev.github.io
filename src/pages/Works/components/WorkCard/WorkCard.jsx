import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
  WorkCardLinks,
  WorkCardDesc,
  StyledWorkCard,
  WorkCardLink,
  WorkCardStack,
  WorkCardTitle,
  WorkCardTop,
  WorkCardInner,
} from './WorkCard.elements';

export const WorkCard = ({ gitHref, webHref, title, desc, stack }) => {
  return (
    <StyledWorkCard>
      <WorkCardInner>
        <WorkCardTop>
          <WorkCardLinks>
            {gitHref && (
              <WorkCardLink href={gitHref} target='__blank'>
                <FiGithub />
              </WorkCardLink>
            )}
            {webHref && (
              <WorkCardLink href={webHref} target='__blank'>
                <FiExternalLink />
              </WorkCardLink>
            )}
          </WorkCardLinks>
        </WorkCardTop>
        <WorkCardTitle>{title}</WorkCardTitle>
        {desc && <WorkCardDesc>{desc}</WorkCardDesc>}
        <WorkCardStack list={stack} />
      </WorkCardInner>
    </StyledWorkCard>
  );
};
