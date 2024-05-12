
import CustomeCard from "./CustomeCard";
import { Icon } from "semantic-ui-react";
import "./Homecards.css"

function HomeCards() {
 
  return (
    <div className="steps-container">
      <h2 className="ui centered header"> How does ApexAxis work?</h2>
      <h3>See how our one-stop platform connects you to Investors from all over the world to help make the Earth a better place!</h3>
      <div className="step-cards">
        <CustomeCard
          icon={<Icon name="sign-in alternate" />}
          step={"Step 1"}
          title={"Sign - up"}
          description={
            "Tell us who you are, what you have done to make the World more sustainable!"
          }
        />
        <CustomeCard
          icon={<Icon name="tasks" />}
          step={"Step 2"}
          title={"Match"}
          description={
            "Discover your perfect Investor match and ride the wave of making the right decisions!"
          }
        />
        <CustomeCard
          icon={<Icon name="calendar alternate outline" />}
          step={"Step 3"}
          title={"Investor"}
          description={
            "Schedule a conversation at a convenient time, choose your preferred mode of communication!"
          }
        />
      </div>
    </div>
  );
}

export default HomeCards;

