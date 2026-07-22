import Card from "./Card";

type featureProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const Feature = ({ icon, title, text }: featureProps) => {
  return (
    <Card className="bg-card  p-4 ">
      <div className="flex justify-center mb-2 text-primary">{icon}</div>

      <h3 className="font-bold text-base">{title}</h3>

      <p className="text-sm text-muted-foreground">{text}</p>
    </Card>
  );
};

export default Feature;
