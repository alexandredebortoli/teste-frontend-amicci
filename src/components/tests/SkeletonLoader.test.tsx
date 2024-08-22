import { render, screen } from "@testing-library/react";
import { SkeletonLoader } from "../SkeletonLoader";

it("should render SkeletonLoader component", () => {
  render(<SkeletonLoader />);
  const skeletonLoader = screen.getByTestId("skeleton-loader");
  expect(skeletonLoader).toBeInTheDocument();
});
