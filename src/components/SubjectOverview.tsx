import { Construction } from "lucide-react";

const SubjectOverview = () => {

    return (
        <section className="bg-[var(--md-sys-color-surface-container-lowest)] hidden md:flex flex-col items-center justify-center gap-3 p-8">
            <Construction className="text-[var(--md-sys-color-secondary)] w-14 h-14" />
            <p className="text-[var(--md-sys-color-on-surface-variant)]">Her kommer en emneoversikt</p>
        </section>

    )

}

export default SubjectOverview;