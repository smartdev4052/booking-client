import GenAbout from "../../components/pubComponets/About/Generators/GenAbout";
import GenForm from "../../components/pubComponets/Form/Generators/GenForm";

const GenPubPage = ({ aboutType, formType }) => {
	return (
		<div className="flex h-full w-full items-center justify-center py-10">
			<div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-10 xl:w-[1280px] xl:flex-row">
				<div className="flex h-full w-full items-center justify-center xl:w-1/2">
					<GenAbout aboutType={aboutType} />
				</div>
				<div className="flex h-full w-full items-start justify-center xl:w-1/2 xl:items-center">
					<GenForm formType={formType} />
				</div>
			</div>
		</div>
	);
};

export default GenPubPage;
