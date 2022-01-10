import { render } from '@testing-library/react';
import Loading from '../components/Loading';

const renderLoading = () => {
  return render(
    <Loading />
  );
};

describe('<Loading/>', () => {
  it('renders without crashing', () => {
    renderLoading();
  });
});