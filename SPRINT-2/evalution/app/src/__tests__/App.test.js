import { render, screen } from "@testing-library/react";
import { Input } from "../Components/Input";

test("Fake assertion", () => {
  expect(1).toBe(1);
});
describe("Input atests",function(){


  it("should render input in dom",function(){
  render(<Input>onChange</Input>);
  
  let input = screen.getByTestId("onChange");
  expect(input).toBeInTheDocument();
  })
})