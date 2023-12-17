import FeatureImage from "./FeatureImage";
import FeatureTitle from "./FeatureTitle";
import CustomizedAccordions from "./Shared/AccordinSection";
import InfoTable from "./InfoTable";
const FeaturedSection = () => {
  return (
    <section className="lg:flex lg:justify-start lg:items-start lg:m-4 lg:p-4">
      <FeatureImage />
      <section className="lg:flex lg:flex-col items-center justify-center">
        <FeatureTitle />
        <CustomizedAccordions />
      </section>

      <InfoTable />
    </section>
  );
};

export default FeaturedSection;
