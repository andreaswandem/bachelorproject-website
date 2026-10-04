import type { LucideIcon } from "lucide-react";

type ProjectExampleCardProps = {
	title: string;
	description: string;
	icon: LucideIcon;
};

const ProjectExampleCard = ({
	title,
	description,
	icon: Icon,
}: ProjectExampleCardProps) => {

    return (
        <article className="group w-68 shrink-0 rounded-lg bg-(--md-sys-color-surface-container-low) p-4 inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-black/20 md:w-100">
            <h3 className="mb-2 flex items-center justify-between font-semibold text-(--md-sys-color-on-surface)">
                {title}
                <Icon className="h-5 w-5 group-hover:scale-115 group-hover:text-(--md-sys-color-primary)" />
            </h3>
            <p className="leading-relaxed text-(--md-sys-color-on-surface-variant)">    
                {description}
            </p>
        </article>        
    )
}

export default ProjectExampleCard;