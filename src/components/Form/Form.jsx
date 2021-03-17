import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Btn';

const StyledForm = styled.form`
  display: grid;
  grid-gap: ${({ theme }) => theme.GAP.xs};
`;

const FormInput = styled.input``;
const FormTextArea = styled.textarea``;

export const Form = () => {
  return (
    <StyledForm>
      <FormInput type='text' placeholder='name'></FormInput>
      <FormInput type='email' placeholder='mail'></FormInput>
      <FormTextArea placeholder='text'></FormTextArea>
      <Btn>send</Btn>
    </StyledForm>
  );
};
