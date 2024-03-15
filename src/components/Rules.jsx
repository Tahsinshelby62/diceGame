import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play the Game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice.
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #fbf1f1;
  padding: 15px;
  h2 {
    font-size: 20px;
  }
  .text {
    margin-top: 20px;
    line-height: 8px;
  }
`;
