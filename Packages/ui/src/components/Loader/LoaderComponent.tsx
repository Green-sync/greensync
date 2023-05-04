import { LoaderDto } from "./LoaderDto";
import { LoaderSwitcher } from "./LoaderThemes";

export const LoaderComponent = ({ msg, type }: LoaderDto) => {
  return LoaderSwitcher()[`${type ? type : "spinner"}`](msg);
};

export default { LoaderComponent };
