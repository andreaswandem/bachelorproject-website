const SubjectOverview = () => {
	return (
		<section className="hidden border-l border-(--md-sys-color-outline-variant) bg-(--md-sys-color-surface-container-lowest) px-12 py-6 md:block">
			<div className="relative h-full overflow-hidden rounded-lg border border-(--md-sys-color-outline-variant)">
				<img
					src="/the-boys.jpg"
					alt="The boys"
					className="absolute inset-0 h-full w-full object-cover brightness-95 saturate-90"
				/>
				<div className="absolute inset-0 bg-(--md-sys-color-primary)/10 mix-blend-multiply" />
			</div>
		</section>
	);
};

export default SubjectOverview;