import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';
import courseImage from '../assets/images/course2.png';
import altitudeImage from '../assets/images/altitude2.png';

export default function Course2() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<figure className='maps'>
				<p>코스</p>
				<img src={courseImage} alt='' />
				<p>고도</p>
				<img src={altitudeImage} alt='' />
			</figure>
			<article className='contents'>
				<p className='title'>{CurrObject?.text[Lang]}</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo quos libero natus asperiores ad corporis
					repellat molestias nulla omnis, numquam necessitatibus quas ab, dignissimos delectus aut laboriosam! Saepe quo
					quasi quod eveniet assumenda ex, incidunt cumque, nisi excepturi pariatur omnis necessitatibus similique
					dolorum. Id dolore similique vel, veniam vitae labore assumenda, quaerat architecto impedit reiciendis
					delectus est ea dicta, magni illum alias placeat? Necessitatibus cum nam iusto dignissimos voluptatibus
					voluptas cupiditate tempore dolor nisi quod eum maxime modi quae, obcaecati nesciunt, tenetur natus! Quos quia
					neque est dolorem explicabo pariatur distinctio modi quam repudiandae! Numquam optio fuga nostrum hic!
				</p>
			</article>
			<figure className='vidFrame'>
				<iframe
					title={CurrObject?.text[Lang]}
					src='https://www.youtube.com/embed/JUDV2j02xgg?si=IW_FcQq9lPlIhKeZ'
					allowfullscreen></iframe>
			</figure>
		</Layout>
	);
}
