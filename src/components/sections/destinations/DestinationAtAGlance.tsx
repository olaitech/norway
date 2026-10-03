import { DestinationQuickFacts } from "./DestinationQuickFacts";
import { DestinationSection } from "./DestinationSection";

export type DestinationAtAGlanceProps = {
  /** Supply a unique ID if multiple at-a-glance sections appear on one page. */
  id?: string;
  region: string;
  idealTripLength: string;
  bestSeason: string;
  nearestGateway: string;
  transport: string;
  carRecommended: string;
};

export function DestinationAtAGlance({
  id = "at-a-glance",
  region,
  idealTripLength,
  bestSeason,
  nearestGateway,
  transport,
  carRecommended,
}: DestinationAtAGlanceProps) {
  return (
    <DestinationSection id={id} eyebrow="Planning essentials" heading="At a glance">
      <DestinationQuickFacts
        facts={[
          { label: "Region", value: region },
          { label: "Ideal trip length", value: idealTripLength },
          { label: "Best season", value: bestSeason },
          { label: "Nearest gateway", value: nearestGateway },
          { label: "Getting around", value: transport },
          { label: "Is a car recommended?", value: carRecommended },
        ]}
      />
    </DestinationSection>
  );
}
