import React from "react";
import tw from "tailwind-styled-components";

const LoaderWrapper = tw.div`
  flex items-center justify-center
  w-full h-full
`;

const Loader = tw.div`
  border-4 border-t-4 border-gray-200
  rounded-full w-12 h-12
  animate-spin
`;

const LoaderAnimation = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default LoaderAnimation;
