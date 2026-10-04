import ShortInfo from "./components/ShortInfo";
import SubjectOverview from "./components/SubjectOverview";
import AboutProject from "./components/AboutProject";
import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import ProjectExamples from "./components/project-examples/ProjectExamples";
import Team from "./components/Team";

function App() {
	return (
		<div className="mx-auto min-h-screen max-w-[1600px] bg-(--md-sys-color-surface) sm:p-10">
			<Header />
			<div className="px-2 pb-2 shadow-lg sm:p-0">
				<Hero />
				<ShortInfo />
				<Team />
				<ProjectExamples />
				<div className="grid grid-cols-1 border-b-2 border-(--md-sys-color-outline-variant) md:grid-cols-2">
					<AboutProject />
					<SubjectOverview />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
