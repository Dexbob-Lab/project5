import { useRef } from 'react';

//src:이미지 url전달받음, className: Pic컴포넌트에 적용한 클래스명을 내부 div 프레임에 적용, shadow: 그림자 출력여부 결정
export default function Pic({ className, src, alt = '', shadow = false, style, onClick }) {
	const ref_img = useRef(null);

	return (
		<div style={{ position: 'relative', ...style }} className={className} onClick={onClick}>
			{shadow && <img style={shadowStyle} src={src} alt={alt} />}
			<img ref={ref_img} style={picStyle} src={src} alt={alt} />
		</div>
	);
}

//이미지 그림자 스타일
const shadowStyle = {
	width: '100%',
	height: '100%',
	objectFict: 'cover',
	position: 'absolute',
	top: 20,
	left: 20,
	filter: 'blur(20px)',
	opacity: 0.8
};
//기본 이미지 스타일
const picStyle = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
	top: 0,
	left: 0
};
