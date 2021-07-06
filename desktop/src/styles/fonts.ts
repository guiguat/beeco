import styled from 'styled-components';

interface FontProps {
  color?: string;
}
export const DisplayHeavy = styled.span<FontProps>`
  font-family: 'Saira';
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 4.8rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;
export const HeadlineLight = styled.span<FontProps>`
  font-family: 'Saira';
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;
export const TitleHeavy = styled.span<FontProps>`
  font-family: 'Saira';
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.8rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;
export const TitleLight = styled.span<FontProps>`
  font-family: 'Saira';
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;
export const SubheaderLight = styled.span<FontProps>`
  font-family: 'Archivo';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;
export const SubheaderHeavy = styled.span<FontProps>`
  font-family: 'Archivo';
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;

export const BodyHeavy = styled.span<FontProps>`
  font-family: 'Archivo';
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;

export const BodyLight = styled.span<FontProps>`
  font-family: 'Archivo';
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;

export const SmallLight = styled.span<FontProps>`
  font-family: 'Archivo';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${(props) => props.color ?? props.theme.colors.lightGrey};
`;

export const SmallHeavy = styled.span<FontProps>`
  font-family: 'Archivo';
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${(props) => props.color ?? props.theme.colors.grey};
`;

export const CaptionLight = styled.span<FontProps>`
  font-family: 'Archivo';
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${(props) => props.color ?? props.theme.colors.lightGrey};
`;
