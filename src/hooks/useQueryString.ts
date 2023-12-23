import { useSearchParams } from 'react-router-dom';

interface IQueryParams {
  text: string;
  name: string;
}

/**
 * @description
 * querystring 사용 유틸 훅입니다.
 * 페이지가 리프래쉬되도 정보를 유지하기 위해 쿼리스트링을 쉽게 사용하기 위한 훅입니다.
 */
const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * @description
   * 쿼리 스트링 key와 value를 유동적으로 받아 쿼리스트링에 고정해주는 함수입니다.
   * @param {IQueryParams} qs  name : 쿼리스트링 key // text: 쿼리스트링 value
   */
  function qsChangeHandler(qs: IQueryParams) {
    const { text, name } = qs;
    searchParams.set(name, text);
    setSearchParams(searchParams);
  }

  /**
   * @description
   * 쿼리 스트링 key와 value를 유동적으로 받아 쿼리스트링에 고정해주는 함수입니다.
   * @param {string} name  쿼리스트링 key
   * @param {unknown} replaceValue 해당 키값이 없을 때 , 대체할 값
   * @returns {unknown}
   */
  function getQueryString(name: string, replaceValue: unknown): unknown {
    const queryString = searchParams.get(name) || replaceValue;
    return queryString;
  }

  return { qsChangeHandler, getQueryString };
};

export default useQueryString;
