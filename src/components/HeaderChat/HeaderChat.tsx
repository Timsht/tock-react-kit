import styled, { StyledComponent } from '@emotion/styled';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { prop } from 'styled-tools';
import TockTheme from 'styles/theme';

type Props = {
  title: string;
  subtitle: string;
};

const Header: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>,
  unknown,
  TockTheme
> = styled.div`
  ${prop<any>('theme.overrides.chatHeader.header', '')}
`;

const HeaderChat = ({ title, subtitle }: Props) => {
  return <Header>header</Header>;
};

export default HeaderChat;
