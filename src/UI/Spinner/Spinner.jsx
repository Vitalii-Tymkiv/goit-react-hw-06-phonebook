import { MagnifyingGlass } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#b7d0da"
      />
    </SpinnerWrapper>
  );
};
