import useLink from '../hooks/useLink';

export default function Footer() {
	const linkPage = useLink();
	return (
		<footer className='footer'>
			<button onClick={() => linkPage('/')}>
				<img src='logo/logo1.png' width='50' alt='' />
			</button>
			<section>
				<ul>
					<li>지리산씨 협동조합 임현수</li>
					<li>전남 구례군 구례읍 봉성로 36, 2층 </li>
					<li>전화번호 : 070-8880-0352 </li>
					<li>이메일 : jirisanc@gmail.com</li>
				</ul>
				<p>2024 ALPACO &copy; ALL RIGHTS RESERVED.</p>
			</section>
		</footer>
	);
}
