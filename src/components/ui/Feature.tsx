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

      <h3 className="font-bold  font-Oswald text-base">{title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed font-light">{text}</p>
    </Card>
  );
};

export default Feature;
