import PropTypes from "prop-types";
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

function ArrowLeftIcon({ color, height, width }: { color: string, height: number, width: number }) {
    return (
        <View>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 50 50" >
                <G>
                    <Path
                        fill={color}
                        d="M 34.5,1.5 C 36.3769,2.65912 36.8769,4.32578 36,6.5C 29.9851,12.3479 24.1518,18.3479 18.5,24.5C 24.1518,30.6521 29.9851,36.6521 36,42.5C 36.7737,44.403 36.4404,46.0696 35,47.5C 26.6194,40.6202 19.1194,32.9535 12.5,24.5C 19.1516,16.1818 26.4849,8.51508 34.5,1.5 Z"
                    />
                </G>
            </Svg>
        </View>

    );
}

ArrowLeftIcon.defaultProps = {
    color: `"#000"`,
    width: 36,
    height: 36
};

ArrowLeftIcon.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ArrowLeftIcon;