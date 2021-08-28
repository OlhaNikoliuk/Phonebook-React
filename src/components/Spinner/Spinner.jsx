import Loader from "react-loader-spinner";
import {LoaderWrapper} from './Spinner.styled'

export function Spinner() {
  return (
    <LoaderWrapper>
      <Loader
      type="ThreeDots"
      color="#673223"
      height={80}
      width={80}
      timeout={3000} //3 secs
    />
    </LoaderWrapper>
  );
}
