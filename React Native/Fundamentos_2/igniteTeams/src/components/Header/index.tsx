import { BackButton, Container, Logo } from './styles'
import logoImg from '@assets/images/logo.png'
import { Image, Text } from 'react-native';
import ArrowLeftIcon from '@icons/arrow_left.svg'
import ArrowLeft from '@icons/arrowLeft'
import theme from '@theme/index';
import { useNavigation } from '@react-navigation/native';



type Props = {
    showBackButton?: boolean;
}

export const Header = ({ showBackButton }: Props) => {
    const navigation = useNavigation()

    const handleGoBack = () => {
        // navigation.goBack();
        navigation.navigate('groups')//voltar para a group
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <ArrowLeft width={32} height={32} color={theme.COLORS.WHITE} />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}