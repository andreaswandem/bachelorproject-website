import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { teamMembers, type TeamMember } from "../data/teamMembers";
import TeamModal from "./TeamModal";

const Team = () => {
	const [selected, setSelected] = useState<TeamMember | null>(null);

	return (
		<section className="bg-(--md-sys-color-surface-container-lowest) px-4 py-4 md:px-12 md:py-8">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{teamMembers.map((member) => (
					<button
						key={member.id}
						onClick={() => setSelected(member)}
						className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:-translate-y-1 hover:font-semibold hover:shadow-xl"
					>
						<div>
							<img src={member.image} alt="" className="w-full aspect-square object-cover" />
						</div>
						<div className="bg-(--md-sys-color-surface-container-low) px-4 py-4 text-left">
							<h2 className="font-semibold text-(--md-sys-color-on-surface-variant)">
								{member.name}
							</h2>
							<p className="flex items-center text-(--md-sys-color-primary)">
								Se profil
								<ChevronRight className="h-5 w-5" />
							</p>
						</div>
					</button>
				))}
			</div>
			<TeamModal member={selected} onClose={() => setSelected(null)} />
		</section>
	);
};

export default Team;