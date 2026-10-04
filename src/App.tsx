import ShortInfo from "./components/ShortInfo";
import SubjectOverview from "./components/SubjectOverview";
import AboutProject from "./components/AboutProject";
import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import ProjectExamples from "./components/ProjectExamples";
import Team from "./components/Team";

function App() {
  return (
    <div className="min-h-screen bg-[var(--md-sys-color-surface-dim)] sm:p-10 max-w-[1600px] mx-auto">
      <Header />
      <div className="px-2 pb-2 sm:p-0 shadow-lg">
        <Hero />
        <ShortInfo />
        <Team />
        <ProjectExamples />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border-b-4 border-[var(--md-sys-color-surface-dim)]">
            <AboutProject />
            <SubjectOverview />
        </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
