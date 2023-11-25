import { render, screen, fireEvent } from '@testing-library/react';
import App from '@/App';
import { logRoles } from '@testing-library/react';

test('버튼 클릭 테스트', () => {
  const { container } = render(<App />);
  logRoles(container);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'yellow' });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
});
