import renderer from "react-test-renderer";
import GenericButton from "../../src/components/GenericButton";

describe("Should render GenericButton with:", () => {
  it("testID", () => {
    const testId = "sample-btn";
    const tree = renderer
      .create(
        <GenericButton title="Sample btn" onPress={() => {}} testID={testId} />
      )
      .toJSON();
    expect(tree?.props?.testID).toBe(testId);
  });
});
