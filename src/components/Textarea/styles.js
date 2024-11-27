import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  border: none;
  border-radius: 10px;
  padding: 16px;
  resize: none;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme}) => theme.COLORS.WHITE};
  font-size: 16px;
  margin-bottom: 8px;
  /* outline: none; */

  &::placeholder {
    color: ${({ theme}) => theme.COLORS.GRAY_300};
  }
`;