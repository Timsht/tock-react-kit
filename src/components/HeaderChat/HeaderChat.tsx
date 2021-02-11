import styled, { StyledComponent } from '@emotion/styled';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { prop } from 'styled-tools';
import TockTheme from 'styles/theme';
import { X } from 'react-feather';

type Props = {
  title?: string;
  subtitle?: string;
  closeButton?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  fullScreen?: boolean;
};

const Header: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>,
  unknown,
  TockTheme
> = styled.div`
  display: flex;
  flex-direction: row;
  background: ${prop<any>('theme.palette.background.bot')};
  background-color: #241768;
  color: white;
  font-size: inherit;
  ${prop<any>('theme.overrides.chatHeader.header', '')}

  & > span {
    display: flex;
    cursor: pointer;
    background-color: #342779;
    justify-content: center;
    align-items: center;
    flex: 0.5;
  }
  & > span:hover {
    background-color: #291a77;
    color: #a62f2f;
  }
`;

const Titles: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>,
  unknown,
  TockTheme
> = styled.div`
  padding: 10px;
  font-size: inherit;
  flex: 1;

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
        <span onClick={closeButton}>
          <X />
        </span>
      )}
    </Header>
  );
};

HeaderChat.defaultProps = {
  title: 'Bot',
};

export default HeaderChat;
