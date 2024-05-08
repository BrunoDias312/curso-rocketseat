import PropTypes from "prop-types";

function Layer({ color, height, width }: { color: string, height: number, width: number }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M16 7.5a4 4 0 10-8 0H6a6 6 0 1110.663 3.776l-7.32 8.723L18 20v2H6v-1.127l9.064-10.802A3.982 3.982 0 0016 7.5z" fill={color} stroke="white" />
        </svg>
    );
}

Layer.defaultProps = {
    color: "#000",
    width: 16,
    height: 16
};

Layer.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Layer;