import styled, { ThemedStyledProps } from 'styled-components'
import Link from 'next/link';
import Flex from 'src/components/foundation/flex';

type LinkProps = Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'> & {
  isActive: boolean;
}

export const Pagination = ({ maxPageNumber, currentPageNumber }) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;
  const pageNumbers = [];

  for (let i = 1; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent='j-center' gap='small'>
      {currentPageNumber !== 1 && (
        <StyledLink href={`/blog/page/${prevPage}`}>＜</StyledLink>
      )}

      {pageNumbers.map((pageNumber) => {
        const isActive = pageNumber === currentPageNumber;
        return (
          <Link key={pageNumber} href={`/blog/page/${pageNumber}`}>
            <Number isActive={isActive}>{pageNumber}</Number>
          </Link>
        );
      })}

      {currentPageNumber !== maxPageNumber && (
        <StyledLink href={`/blog/page/${nextPage}`}>＞</StyledLink>
      )}
    </Flex>
  );
};

const StyledLink = styled(Link)`
  display: grid;
  place-content: center;
  width: 2em;
  height: 2em;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Number = styled.a.attrs((props: ThemedStyledProps<LinkProps, any>) => ({
  isActive: props.isActive,
}))`
  display: grid;
  place-content: center;
  border-radius: 3px;
  width: 2em;
  height: 2em;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ isActive, theme }) =>
    isActive
      ? `
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `
      : ''}
`;