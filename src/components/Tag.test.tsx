import { fireEvent, render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag 컴포넌트 테스트', () => {
  test('기본 태그가 화면에 잘 렌더링되는지 확인', () => {
    render(<Tag>태그</Tag>);

    const tagElement = screen.getByText('태그');

    expect(tagElement).toBeInTheDocument();
  });

  test('variant별 태그가 화면에 잘 렌더링되는지 확인', () => {
    render(
      <div>
        <Tag variant='sm'>작은 태그</Tag>
        <Tag variant='md'>중간 태그</Tag>
        <Tag variant='lg'>큰 태그</Tag>
      </div>
    );

    const smTagElement = screen.getByText('작은 태그').parentNode;
    const mdTagElement = screen.getByText('중간 태그').parentNode;
    const lgTagElement = screen.getByText('큰 태그').parentNode;

    expect(smTagElement).toHaveClass('text-sm');
    expect(mdTagElement).toHaveClass('text-base');
    expect(lgTagElement).toHaveClass('text-lg');
  });

  test('제거 가능한 태그의 x버튼 클릭 시 화면에서 잘 제거되는지 확인', () => {
    render(<Tag isRemovable>태그</Tag>);

    const tagElement = screen.getByText('태그');
    expect(tagElement).toBeInTheDocument();

    const removeButton = screen.getByRole('button', { name: 'remove-button' });
    fireEvent.click(removeButton);

    expect(tagElement).not.toBeInTheDocument();
  });
});
