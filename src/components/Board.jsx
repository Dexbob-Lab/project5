import useDatetimeText from '../hooks/useDatetimeText';

export default function Borad({ children, data = [], clickEvent }) {
	const datetimeText = useDatetimeText();

	return (
		<div className='board'>
			{children}
			<table>
				<thead>
					<tr>
						<th>번호</th>
						<th>제 목</th>
						<th>닉네임</th>
						<th>등록일</th>
						<th>조회수</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((data, idx) => {
						return (
							<tr key={idx} onClick={() => clickEvent(idx)}>
								<td>{data.id}</td>
								<td>{data.title}</td>
								<td>{data.nickname}</td>
								<td>{datetimeText(data.updated)}</td>
								<td>{data.view_count}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
