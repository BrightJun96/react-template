import { BounceLoader } from 'react-spinners';
import { SLoadingSection } from './styles';

interface Props {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  errorMessage?: string | JSX.Element | JSX.Element[];
  emptyMessage?: string | JSX.Element | JSX.Element[];
  children?: string | string[] | JSX.Element | JSX.Element[];
  customStyle?: React.CSSProperties;
}

/**
 * 로딩 컴포넌트
 * @param props.isLoading 로딩 상태
 * @param props.isError 오류 상태
 * @param props.isEmpty 데이터 없음 상태
 * @param props.errorMessage 오류 메시지
 * @param props.emptyMessage 데이터 없음 메시지
 * @param props.customStyle 스타일
 */
export default function LoadingSection({
  isLoading,
  isError,
  isEmpty,
  errorMessage,
  emptyMessage,
  children,
  customStyle,
}: Props) {
  return (
    <SLoadingSection.Container style={customStyle ?? {}}>
      {isLoading && (
        <SLoadingSection.Loading>
          <BounceLoader color="#36d7b7" />
        </SLoadingSection.Loading>
      )}
      {isError && !isLoading && (
        <SLoadingSection.Message>{errorMessage || '데이터를 불러올 수 없습니다.'}</SLoadingSection.Message>
      )}
      {isEmpty &&
        !isLoading &&
        !isError &&
        (!emptyMessage || typeof emptyMessage === 'string' ? (
          <SLoadingSection.Message
            dangerouslySetInnerHTML={{ __html: emptyMessage || '내용이 없습니다.' }}
          ></SLoadingSection.Message>
        ) : (
          <SLoadingSection.Message>{emptyMessage}</SLoadingSection.Message>
        ))}
      {!isEmpty && !isLoading && children}
    </SLoadingSection.Container>
  );
}
