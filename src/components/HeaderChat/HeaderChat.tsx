import styled, { StyledComponent } from '@emotion/styled';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { prop } from 'styled-tools';
import TockTheme from 'styles/theme';
import { X } from 'react-feather';

type Props = {
  title?: string;
  subtitle?: string;
  closeButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullScreen?: boolean;
};

const Header: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>,
  unknown,
  TockTheme
> = styled.div`
  display: grid;
  grid-template-areas:
    'title closeButton'
    'subtitle closeButton';
  background: ${prop<any>('theme.palette.background.bot')};
  background-color: #241768;
  color: white;
  font-size: inherit;
  ${prop<any>('theme.overrides.chatHeader.header', '')}
`;

const Titles: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>,
  unknown,
  TockTheme
> = styled.div`
  padding: 10px;
  font-size: inherit;

  & h4 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const HeaderChat = ({ title, subtitle, closeButton, fullScreen }: Props) => {
  return (
    <Header>
      <Titles>
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </Titles>
      {closeButton && (
        <button onClick={closeButton}>
          <X />
        </button>
      )}
      {fullScreen && <button>full</button>}
    </Header>
  );
};

HeaderChat.defaultProps = {
  title: 'Bot',
};

export default HeaderChat;
