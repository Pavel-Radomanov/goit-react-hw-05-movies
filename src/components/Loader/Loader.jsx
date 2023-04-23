// import React from 'react';
// import ContentLoader from 'react-content-loader';

// const Loader = (isLoading, props) => {
//   if (isLoading) {
//     <ContentLoader
//       viewBox="0 0 400 160"
//       height={260}
//       width={400}
//       backgroundColor="transparent"
//       {...props}
//     >
//       <circle cx="150" cy="86" r="8" />
//       <circle cx="194" cy="86" r="8" />
//       <circle cx="238" cy="86" r="8" />
//     </ContentLoader>;
//   }
// };

// Loader.metadata = {
//   name: 'RioF',
//   github: 'clariokids',
//   description: 'Three Dots',
//   filename: 'ThreeDots',
// };

// export default Loader;

import { RotatingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

const Loader = () => {
  return (
    <Loading>
      <RotatingLines
        strokeColor="#3f51b590"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </Loading>
  );
};
export default Loader;
