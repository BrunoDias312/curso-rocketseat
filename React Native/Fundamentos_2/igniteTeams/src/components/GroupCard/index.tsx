import theme from "@theme/index";
import { Container, Title } from "./styles";
import UserTwoIcon from '@assets/icons/userTwo'
import { TouchableOpacityProps} from 'react-native'

type Props = TouchableOpacityProps & {
    title: string
}

export const GroupCard = ({title, ...rest}: Props) => {

    return(
        <Container {...rest}>
            <UserTwoIcon color={theme.COLORS.GREEN_700} />
            <Title>{title}</Title>
        </Container>
    )
}