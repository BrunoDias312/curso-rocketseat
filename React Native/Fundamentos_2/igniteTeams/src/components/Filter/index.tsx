import { Container, Title, FilterStyleProps } from "./styles";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}


export const Filter = ({ title, isActive = false, ...rest }: Props) => {
    return(
        <Container isActive={isActive} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}