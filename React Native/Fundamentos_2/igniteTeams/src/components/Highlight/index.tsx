import { Container, Title, SubTitle } from "./styles";

type Props = {
    title: string;
    subtitle: string;
}

export const HighLight = ({ title, subtitle}: Props) => {

    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}