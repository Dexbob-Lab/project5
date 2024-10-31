export default function Pic({ className, src, alt = '', shadow = false, style, onClick }) {
	return (
		<div style={{ ...wrapperStyle, ...style }} className={className} onClick={onClick}>
			{shadow && <img style={shadowStyle} src={src} alt={alt} />}
			<img style={picStyle} src={src} alt={alt} />
		</div>
	);
}

const wrapperStyle = {
	// width: '100%',
	// height: '100%',
	position: 'relative'
};

const shadowStyle = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
	top: '20px',
	left: '20px',
	filter: 'blur(20px)',
	opacity: 0.8
};

const picStyle = {
	width: '100%',
	height: '100%',
	borderRadius: '5px',
	objectFit: 'cover',
	position: 'absolute',
	top: 0,
	left: 0
};
