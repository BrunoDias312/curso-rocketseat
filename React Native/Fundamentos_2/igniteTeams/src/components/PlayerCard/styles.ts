import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";


export const Container = styled.View`
    ${({ theme }) => css `
        background-color: ${theme.COLORS.GRAY_500};
    `}

    height: 56px;
    width: 100%;

    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`

export const Name = styled.Text`
    flex: 1;
    border-radius: 6px;

    ${({ theme }) => css `
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR}
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200,
}))`
    margin-left: 16px;
    margin-right: 4px;
`