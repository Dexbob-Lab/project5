export default function Layout({ className, children }) {
	return (
		<main className={className}>
			<section>{children}</section>
		</main>
	);
}
