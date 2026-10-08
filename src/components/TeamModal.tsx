import type { TeamMember } from "../data/teamMembers";
import { MapPin, X } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

type Props = {
	member: TeamMember | null;
	onClose: () => void;
};

const TeamModal = ({ member, onClose }: Props) => {
	if (!member) return null;

    return (
		<div
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative flex max-h-[90vh] w-[90%] max-w-lg flex-col overflow-y-auto rounded-lg bg-(--md-sys-color-surface-container-low) md:min-h-[450px] md:max-w-4xl md:flex-row md:overflow-hidden"
			>
				<button
					onClick={onClose}
					aria-label="Lukk"
                    className="absolute top-4 right-4 z-10 cursor-pointer rounded-full border bg-(--md-sys-color-surface-container-low) border-(--md-sys-color-outline) p-2 text-(--md-sys-color-on-surface-variant) hover:bg-(--md-sys-color-surface-container-high)"     
				>
					<X className="h-4 w-4" />
				</button>

				<img
					src={member.image}
					alt={member.name}
                    className="aspect-[16/10] w-full object-cover object-[center_20%] md:aspect-auto md:w-1/3 md:object-center"
				/>

				<div className="flex flex-col p-6 md:flex-1 md:p-10">
					<h1 className="text-(--md-sys-color-on-surface) text-2xl font-semibold md:text-4xl">{member.name}</h1>
					<p className="mt-1 mb-4 flex items-center gap-1 text-sm text-(--md-sys-color-on-surface-variant)">
						<MapPin className="h-4 w-4" />
						{member.location}
					</p>
					<hr className="mb-4 border-gray-200" />
					<p className="mb-6 md:text-lg text-(--md-sys-color-on-surface-variant)">{member.bio}</p>

					<div className="mt-auto flex gap-2">
						<a
							href={member.linkedin}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1 rounded-lg bg-(--md-sys-color-secondary-container) px-4 py-2 text-(--md-sys-color-on-secondary) hover:brightness-95 active:scale-95"
						>
							LinkedIn
                            <FaLinkedin className="h-4 w-4" />
						</a>
						<a
							href={member.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1 rounded-lg bg-(--md-sys-color-secondary-container) px-4 py-2 text-(--md-sys-color-on-secondary) hover:brightness-95 active:scale-95"
						>
							Github
                            <FaGithub className="h-4 w-4" />
						</a>
					</div>
				</div>
			</div>
		</div>
    )
};

export default TeamModal;