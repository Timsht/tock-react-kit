import styled, { StyledComponent } from '@emotion/styled';
import React, {
  DetailedHTMLProps,
  FormEvent,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import { Send } from 'react-feather';
import TockTheme from 'styles/theme';
import { prop } from 'styled-tools';
import TextareaAutosize from 'react-textarea-autosize';

const InputOuterContainer: StyledComponent<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  unknown,
  TockTheme
> = styled.form`
  max-width: ${prop<any>('theme.sizing.conversation.width')};
  width: 100%;
  position: relative;
  margin: 0.5em auto;
  display: flex;
  align-items: center;
  ${prop<any>('theme.overrides.chatInput.container', '')}
`;

const Textarea: StyledComponent<unknown, unknown, TockTheme> = styled.textarea`
  width: 100%;
  flex: 1;
  resize: none;
  padding: 0.5em 3em 0.5em 1em;

  border: none;
  outline: none;

  border-radius: ${prop<any>('theme.sizing.borderRadius')};
  background: ${prop<any>('theme.palette.background.input')};
  color: ${prop<any>('theme.palette.text.input')};

  font-family: inherit;
  font-size: inherit;

  &.disabled-input {
    background: ${prop<any>('theme.palette.background.inputDisabled')};
  }

  ${prop<any>('theme.overrides.chatInput.input', '')}
`;

const Icon: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  unknown,
  TockTheme
> = styled.button`
  position: absolute;
  background: none;
  border: none;
  border-radius: 50%;
  max-height: 23px;
  right: 0;
  flex: 0;
  cursor: pointer;
  height: 100%;
  width: calc(${prop<any>('theme.typography.fontSize')} * 3);
  & svg {
    stroke: ${prop<any>('theme.palette.background.sender')};
    fill: ${prop<any>('theme.palette.text.sender')};
  }

  & > svg {
    position: relative;
    top: 3px;
    right: 2px;

    &:hover,
    &:focus {
      stroke: ${prop<any>('theme.palette.text.sender')};
      fill: ${prop<any>('theme.palette.background.sender')};
    }
  }
  ${prop<any>('theme.overrides.chatInput.icon', '')}
`;

export interface ChatInputProps {
  disabled?: boolean;
  onSubmit: (message: string) => void;
}

const ChatInput: (props: ChatInputProps) => JSX.Element = ({
  disabled,
  onSubmit,
}: ChatInputProps): JSX.Element => {
  const [value, setValue] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      onSubmit(value);
      setValue('');
    }
  };

  const onKeyEnterPressed = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit(e);
    }
  };

  return (
    <InputOuterContainer onSubmit={submit}>
      <TextareaAutosize
        minRows={1}
        onKeyDown={onKeyEnterPressed}
        maxRows={3}
        onChange={({ target: { value } }) => setValue(value)}
        name="message"
        placeholder="Type a message"
        disabled={disabled}
        value={value}
        autoFocus
        autoComplete="off"
        style={{
          width: '100%',
          flex: 1,
          resize: 'none',
          padding: '0.5em 3em 0.5em 1em',
          border: 'none',
          outline: 'none',
          borderRadius: '3px',
        }}
      />
      <Icon>
        <Send size="100%" />
      </Icon>
    </InputOuterContainer>
  );
};

export default ChatInput;
